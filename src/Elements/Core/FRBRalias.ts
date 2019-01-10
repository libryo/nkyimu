import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ValueType } from '../../ComplexTypes/ValueType';
import { Name } from '../../AttributeGroups/Name';

const type = new ValueType();
/**
 * The element FRBRalias is the metadata property containing additional well-known
 * names of the document in the respective level of the FRBR hierarchy
 */
export class FRBRalias extends AbstractNode {
  public abbreviation = 'frbralias';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];

  public getNodeName(): string {
    return 'FRBRalias';
  }
}
