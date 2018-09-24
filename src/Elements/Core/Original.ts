import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ReferenceType } from '../../ComplexTypes/ReferenceType';

const type = new ReferenceType();
/**
 * The element original is a metadata reference to the
 * Akoma Ntoso IRI of the original version of this
 * document (i.e., the first expression)
 */
export class Original extends AbstractNode {
  abbreviation = '';

  getNodeName(): string {
    return 'original';
  }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}
