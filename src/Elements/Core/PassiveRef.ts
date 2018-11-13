import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ReferenceType } from "../../ComplexTypes/ReferenceType";

const type = new ReferenceType();
/**
 * The element passiveRef is a metadata reference to the
 * Akoma Ntoso IRI of a document providing modifications
 * on this document (i.e., a passive references)
 */
export class PassiveRef extends AbstractNode {
  abbreviation = "passiveref";

  getNodeName(): string {
    return "passiveRef";
  }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}
