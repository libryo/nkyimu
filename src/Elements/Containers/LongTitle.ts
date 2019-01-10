import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Blocksreq } from '../../ComplexTypes/Blocksreq';

const type = new Blocksreq();
/**
 * The element longTitle is the section of the preface
 * or coverPage that is called long title.
 */
export class LongTitle extends AbstractNode {
  public abbreviation = 'longtitle';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'longTitle';
  }
}
