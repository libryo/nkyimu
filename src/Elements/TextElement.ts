import { AbstractNode } from '../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../Interfaces/AttributeGroupItem';
import { NodeRules } from '../Interfaces/NodeRules';
import { NodeType } from '../common/enums';

/**
 * The element citation is the individual element of the preface
 * that is called citation
 */
export class TextElement extends AbstractNode {
  public nodeType: NodeType = NodeType.TEXT_NODE;

  public abbreviation = '';

  public readonly CHILDREN_MAP: NodeRules = {};

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];

  /**
   * Get the node type.
   */
  public getNodeType(): NodeType {
    return NodeType.TEXT_NODE;
  }

  /**
   * The name of the node.
   */
  public getNodeName(): string {
    return '';
  }
}
