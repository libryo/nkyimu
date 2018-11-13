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
    const sanitised = source
      .replace(/>\n(\s)*</g, '><')
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    this.doc = parser.parseFromString(sanitised, "text/xml");

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

  generateChildNodes(node: Node): AbstractNode[] {
    const children: AbstractNode[] = [];

    Object.keys(node.childNodes)
      .forEach((key: string) => {
        const currentNode = node.childNodes[Number(key)];
        const createdNode: AbstractNode = Generator.createNodeAndAttributes(currentNode);

        this.generateChildNodes(currentNode)
          .forEach((childNode: AbstractNode) => {
            createdNode.appendChild(childNode);
          });

        children.push(createdNode);
      });

    return children;
  }

  generateAlternateChildNodes(childNode: Node & ChildNode): AbstractNode|null {
    if (childNode.nodeType === Node.TEXT_NODE) {
      return Generator.createNode('', childNode.textContent);
    }

    return null;
  }

  static createNodeAndAttributes(node: Node): AbstractNode {
    if (node instanceof Text) {
      return Generator.createNode('', node.textContent);
    }

    const created = Generator.createNode(node.nodeName);

    if (node instanceof Element) {
      // @ts-ignore
      node.getAttributeNames()
        .forEach((attr: string) => {
          created.setAttribute(Generator.createAttribute(attr, node.getAttribute(attr) || ''));
        });
    }

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

  static fromSelector(selector: string): { root: AbstractNode, last: AbstractNode} {
    const childComparators = ['>'];
    const nodes = selector.split(/>/g);
    const nodesLength = nodes.length;

    const generatedNode: AbstractNode = Generator.generateNodeAndSiblings(nodes[0]);
    let currentNodeLastIndex = selector.indexOf(nodes[0]) + nodes[0].length;
    let currentNode: AbstractNode = generatedNode;

    for (let i = 1; i < nodesLength; i++) {
      const comparator = selector.substr(currentNodeLastIndex, 1);
      if (childComparators.indexOf(comparator) === -1) {
        continue;
      }

      const childNode = Generator.generateNodeAndSiblings(nodes[i]);
      currentNode.appendChild(childNode);
      currentNode = childNode;
      currentNodeLastIndex = selector.indexOf(nodes[i]) + nodes[i].length;
    }

    return { root: generatedNode, last: currentNode };
  }

  private static generateNodeAndSiblings(selector: string): AbstractNode {
    const hasChildren = selector.indexOf('[') !== -1 && selector.indexOf(']') !== -1;
    const nodeSelector = selector.split(/[^A-Za-z]/)[0];

    if (!elementMap[nodeSelector]) {
      throw new Error(`Invalid element ${nodeSelector}`);
    }

    const node = new Elements[elementMap[nodeSelector]]();

    if (!hasChildren) return node;

    selector
      .substr(nodeSelector.length)
      .slice(1, -1)
      .split(',')
      .forEach((e) => {
        const parts = e.split(':');

        if (!elementMap[parts[0]]) {
          throw new Error(`Invalid element ${parts[0]}`);
        }

        const element = new Elements[elementMap[parts[0]]]();

        if (parts.length > 1) {
          element.appendChild(new Elements.TextElement(parts[1]));
        }

        node.appendChild(element);
      });

    return node;
  }
}