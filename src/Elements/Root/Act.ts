import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { HierarchicalStructure } from '../../ComplexTypes/HierarchicalStructure';

const type = new HierarchicalStructure();

/**
 * Element act is used for describing the structure and content of an act
 */
export class Act extends AbstractNode {
  public abbreviation = 'act';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = type.SEQUENCE;

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'act';
  }
}
