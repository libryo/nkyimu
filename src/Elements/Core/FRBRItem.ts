import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { CoreProperties } from '../../ComplexTypes/CoreProperties';

const type = new CoreProperties();
/**
 * The element FRBRItem is the metadata container of identifying properties related
 * to the Item level according to the FRBR hierarchy.
 */
export class FRBRItem extends AbstractNode {
  public abbreviation = 'frbritem';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = type.SEQUENCE;

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;

  public getNodeName(): string {
    return 'FRBRItem';
  }
}
