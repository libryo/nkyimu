import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Blocksreq } from '../../ComplexTypes/Blocksreq';

const type = new Blocksreq();

/**
 * The element div is an HTML element, but is NOT used in Akoma Ntoso
 * as in HTML. Instead of being used as a generic block, Akoma Ntoso
 * uses div as a generic container (as in common practice).
 */
export class Div extends AbstractNode {
  public abbreviation = 'div';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'div';
  }
}
