import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Blocksreq } from '../../ComplexTypes/Blocksreq';

const type = new Blocksreq();

/**
 * The element wrapUp is a concluding element in a hierarchy that
 * contains paragraphs wrapping up the preceding lower hierarchical
 * elements.
 */
export class WrapUp extends AbstractNode {
  public abbreviation = 'wrapup';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'wrapUp';
  }
}
