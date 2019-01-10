import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ReferenceType } from '../../ComplexTypes/ReferenceType';

const type = new ReferenceType();
/**
 * The element activeRef is a metadata reference to the
 * Akoma Ntoso IRI of a document that is modified by this
 * document (i.e., an active references)
 */
export class ActiveRef extends AbstractNode {
  public abbreviation = 'activeref';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;

  getNodeName(): string {
    return 'activeRef';
  }
}
