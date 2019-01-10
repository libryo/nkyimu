import { AbstractNode } from '../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../Interfaces/AttributeGroupItem';
import { NodeRules } from '../Interfaces/NodeRules';
import { ItemType } from '../ComplexTypes/ItemType';

const type = new ItemType();

/**
 * The element citation is the individual element of the preface
 * that is called citation
 */
export class Citation extends AbstractNode {
  public abbreviation = 'cit';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'citation';
  }
}
