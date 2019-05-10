import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Blocksreq } from '../../ComplexTypes/Blocksreq';
import { EIdAttribute } from '../../Attributes';

const type = new Blocksreq();

/**
 * the element content is the final container in a hierarchy, and is
 * where the blocks of text of the content of the structure are finally
 * specified
 */
export class Content extends AbstractNode {
  public abbreviation = 'content';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS.filter(group => group.attribute !== EIdAttribute),
    { attribute: EIdAttribute, required: false },
  ];

  public getNodeName(): string {
    return 'content';
  }
}
