import { AbstractNode } from '../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../Interfaces/AttributeGroupItem';
import { NodeRules } from '../Interfaces/NodeRules';
import { ItemType } from '../ComplexTypes/ItemType';

const type = new ItemType();

/**
 * The element recital is the individual element of the preface
 * that is called recital
 */
export class Recital extends AbstractNode {
  public abbreviation = 'rec';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'recital';
  }
}
