import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ReferenceType } from '../../ComplexTypes/ReferenceType';
import { Name } from '../../AttributeGroups';

const type = new ReferenceType();
/**
 * The element TLCReference is a metadata reference to the
 * Akoma Ntoso IRI of an ontology instance of the class Concept
 */
export class TLCReference extends AbstractNode {
  public abbreviation = 'tlcreference';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];

  public getNodeName(): string {
    return 'TLCReference';
  }
}
