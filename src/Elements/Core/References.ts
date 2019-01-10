import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { RefItems } from '../../ComplexTypes';

const refItems = new RefItems();
/**
 * The element References is a metadata container of all the references
 * to entities external to the document mentioned in the document.
 * They include references to legal documents of any form,as well as
 * references to people, organizations, events, roles, concepts, and
 * anything else is managed by the Akoma Ntoso ontology.
 */
export class References extends AbstractNode {
  public abbreviation = 'references';

  public readonly CHILDREN_MAP: NodeRules = refItems.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = refItems.ATTRIBUTE_GROUPS;

  public getNodeName(): string {
    return 'references';
  }
}
