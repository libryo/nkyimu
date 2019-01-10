import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ValueType } from '../../ComplexTypes/ValueType';

const type = new ValueType();
/**
 * The element FRBRuri is the metadata property containing the IRI of the whole document.
 */
export class FRBRuri extends AbstractNode {
  public abbreviation = 'frbruri';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;

  public getNodeName(): string {
    return 'FRBRuri';
  }
}
