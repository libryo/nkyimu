import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ReferenceType } from '../../ComplexTypes/ReferenceType';

const type = new ReferenceType();
/**
 * The element TLCOrganization is a metadata reference to the
 * Akoma Ntoso IRI of an ontology instance of the class Concept
 */
export class TLCOrganization extends AbstractNode {
  public abbreviation = 'tlcorganization';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;

  public getNodeName(): string {
    return 'TLCOrganization';
  }
}
