import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Name } from '../../AttributeGroups/Name';
import { Metaopt } from '../../ComplexTypes/Metaopt';
import { Date as DateGroup } from '../../AttributeGroups/Date';

const type = new Metaopt();

/**
 * The element FRBRdate is the metadata property containing a relevant date
 * of the document in the respective level of the FRBR hierarchy. Attribute
 * name specifies which actual date is contained here.
 */
export class FRBRdate extends AbstractNode {
  public abbreviation = 'frbrdate';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new DateGroup()).items,
    ...(new Name()).items,
  ];

  public getNodeName(): string {
    return 'FRBRdate';
  }
}
