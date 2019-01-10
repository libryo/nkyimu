import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ValueType } from '../../ComplexTypes/ValueType';

const type = new ValueType();
/**
 * The element FRBRformat is the metadata property containing the Internet
 * Media Type specification for the data format to be used in the
 * manifestation-level IRI of this document.
 */
export class FRBRformat extends AbstractNode {
  public abbreviation = 'frbrformat';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;

  public getNodeName(): string {
    return 'FRBRformat';
  }
}
