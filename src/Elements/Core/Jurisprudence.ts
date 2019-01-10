import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ReferenceType } from '../../ComplexTypes/ReferenceType';

const type = new ReferenceType();
/**
 * The element jurisprudence is a metadata reference to
 * the Akoma Ntoso IRI of a document of which this
 * document is an attachment
 */
export class Jurisprudence extends AbstractNode {
  abbreviation = 'jurisprudence';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;

  public getNodeName(): string {
    return 'jurisprudence';
  }
}
