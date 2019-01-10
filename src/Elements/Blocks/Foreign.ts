import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { AnyOtherType } from '../../ComplexTypes/AnyOtherType';

const type = new AnyOtherType();

/**
 * the element foreign is a generic container for elements not belonging
 * to the Akoma Ntoso namespace (e.g., mathematical formulas). It is a
 * block element and thus can be placed in a container.
 */
export class Foreign extends AbstractNode {
  public abbreviation = 'foreign';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'foreign';
  }
}
