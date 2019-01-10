import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ValueType } from '../../ComplexTypes/ValueType';

const type = new ValueType();
/**
 * The element FRBRcountry is the metadata property containing a ISO 3166-1 Alpha-2
 * code for the country or jurisdiction to be used in the work-level IRI of this document
 */
export class FRBRcountry extends AbstractNode {
  public abbreviation = 'frbrcountry';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;

  public getNodeName(): string {
    return 'FRBRcountry';
  }
}
