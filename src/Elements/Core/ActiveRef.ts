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
  abbreviation = 'activeref';

  getNodeName(): string {
    return 'activeRef';
  }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}
