import { NodeType } from '../enums';
import { Attributes } from '../Interfaces/Attributes';
import { AbstractAttribute } from './AbstractAttribute';

export abstract class AbstractNode {

  abstract nodeType: NodeType;

  abstract abbreviation: string;

  abstract nodeName: string;
  
  protected abstract nodeRx: RegExp;

  protected attributes: Attributes = {};

  protected children: AbstractNode[] = [];

  protected content ?: string;

  /**
   * Get the available children.
   * 
   * @returns AbstractNode[]
   */
  getChildren(): AbstractNode[] {
    return [...this.children];
  }

  /**
   * Append a child to the node.
   *
   * @param node AbstractNode
   *
   * @returns AbstractNode
   */
  appendChild(node: AbstractNode): AbstractNode {
    this.validateChild(node);

    this.children.push(node);

    return this;
  }

  /**
   * Set the attributes of the nodes.
   * 
   * @param attribute: AbstractAttribute
   */
  setAttribute(attribute: AbstractAttribute): void {
    this.attributes[attribute.getName()] = attribute;
  }

  /**
   * Validate the child being added.
   * 
   * @param node AbstractNode
   */
  validateChild(node: AbstractNode): void {
    let childrenStr = this.children
      .map((child: AbstractNode) => child.toRegex())
      .join('');

    childrenStr += node.toRegex();

    if (!this.nodeRx.test(childrenStr)) {
      throw new Error(`Node ${node.nodeName} is not allowed as a child.`);
    }
  }

  /**
   * Get the regex version of the node.
   *
   * @returns string
   */
  toRegex(): string {
    return `<${this.nodeName}>`;
  }

  /**
   * Serialize the node.
   *
   * @param doc Document
   * @returns HTMLElement
   */
  toXml(doc: Document): HTMLElement {
    const node = doc.createElement(this.nodeName);

    Object.keys(this.attributes).forEach((attr: string) => {
      node.setAttribute(attr, this.attributes[attr].getValue());
    });

    this.children.forEach((child: AbstractNode) => {
      node.appendChild(child.toXml(doc));
    });

    return node;
  }
}