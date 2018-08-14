import { AbstractNode } from "../Abstract/AbstractNode";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { NodeRules } from "../Interfaces/NodeRules";
import { AbstractAttribute } from "../Abstract/AbstractAttribute";

/**
 * The element citation is the individual element of the preface
 * that is called citation
 */
export class TextElement extends AbstractNode {
  abbreviation = '';

  nodeName = '';

  readonly CHILDREN_MAP: NodeRules = {};

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];

  constructor(content: string) {
    super();
    this.content = content;
  }

  /**
   * Append a child to the node.
   *
   * @param node AbstractNode
   *
   * @returns AbstractNode
   */
  appendChild(node: AbstractNode): AbstractNode {
    throw new Error('Text node has no children');
  }

  /**
   * Set the text content of the node.
   *
   * @param text string
   */
  setTextContent(text: string): AbstractNode {
    this.content = text;

    return this;
  }

  /**
   * Set the attributes of the nodes.
   *
   * @param attribute: AbstractAttribute
   */
  setAttribute(attribute: AbstractAttribute): void {
    throw new Error('Text node has no attributes');
  }


  /**
   * Serialize the node.
   *
   * @param doc Document
   * @returns HTMLElement
   */
  toXml(doc: Document): HTMLElement|Text {
    const node = doc.createTextNode(this.content);

    return node;
  }
}