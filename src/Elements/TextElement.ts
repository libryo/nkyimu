import { AbstractNode } from "../Abstract/AbstractNode";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { NodeRules } from "../Interfaces/NodeRules";
import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { NodeType } from "../enums";

/**
 * The element citation is the individual element of the preface
 * that is called citation
 */
export class TextElement extends AbstractNode {
  nodeType: NodeType = NodeType.TEXT_NODE;

  abbreviation = '';

  readonly CHILDREN_MAP: NodeRules = {};

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];

  /**
   * Get the node type.
   */
  getNodeType(): NodeType {
    return NodeType.TEXT_NODE;
  }

  /**
   * The name of the node.
   */
  getNodeName(): string {
    return '';
  }
}