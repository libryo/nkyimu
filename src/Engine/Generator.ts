import { AbstractNode, AbstractAttribute } from "../Abstracts";
import * as Elements from '../Elements';
import * as Attributes from '../Attributes';
import { elementMap } from '../elementMap';
import { attributeMap } from '../attributeMap';

export type ElementType = typeof Elements;

export type AttributeType = typeof Attributes;

export class Generator {
  private doc: Document;

  constructor() {
    this.doc = new Document();
  }

  fromText(source: string): AbstractNode {
    const parser = new DOMParser();
    this.doc = parser.parseFromString(source.trim(), "text/xml");

    return this.generateNodes();
  }

  generateNodes() {
    const node = this.doc.children[0];
    const created = Generator.createNodeAndAttributes(node);

    this.generateChildNodes(node)
      .forEach((childNode: AbstractNode) => {
        created.appendChild(childNode);
      });

    created.updateGeneratedIds();

    return created;
  }

  generateChildNodes(node: Element): AbstractNode[] {
    const children: AbstractNode[] = [];

    if (node.children.length !== 0) {
      Object.keys(node.children).forEach((key: string) => {
        const createdNode:AbstractNode = Generator.createNodeAndAttributes(node.children[Number(key)]);

        this.generateChildNodes(node.children[Number(key)])
          .forEach((childNode: AbstractNode) => {
            createdNode.appendChild(childNode);
          });

        children.push(createdNode);
      });

      return children;
    }

    Object.keys(node.childNodes).forEach((key: string) => {
      const child = node.childNodes[Number(key)];

      const createdNode:AbstractNode|null = this.generateAlternateChildNodes(child);

      if (createdNode) children.push(createdNode);
    });

    return children;
  }

  generateAlternateChildNodes(childNode: Node & ChildNode): AbstractNode|null {
    if (childNode.nodeType === Node.TEXT_NODE) {
      return Generator.createNode('', childNode.textContent);
    }

    return null;
  }

  static createNodeAndAttributes(node: Element): AbstractNode {
    const created = Generator.createNode(node.nodeName);

    Object.keys(node.attributes).forEach((attr: string) => {
      const currentAttr: Attr = node.attributes[Number(attr)];

      created.setAttribute(Generator.createAttribute(currentAttr.name, currentAttr.value));
    });

    return created;
  }

  static createNode<T extends keyof ElementType>(name: T|string, content:string|null = null): AbstractNode {
    if (!elementMap[name]) {
      throw new Error(`Element ${name} is not available`);
    }

    return new Elements[elementMap[name] as T](content || '');
  }

  static createAttribute<T extends keyof AttributeType>(name: T|string, value: string): AbstractAttribute {
    if (!attributeMap[name]) {
      throw new Error(`Element ${name} is not available`);
    }

    return new Attributes[attributeMap[name] as T](value);
  }
}