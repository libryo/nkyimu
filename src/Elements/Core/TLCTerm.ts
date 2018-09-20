import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ReferenceType } from "../../ComplexTypes/ReferenceType";

const type = new ReferenceType();
/**
 * The element TLCTerm is a metadata reference to the
 * Akoma Ntoso IRI of an ontology instance of the class Concept
 */
export class TLCTerm extends AbstractNode {
  abbreviation = "";

  getNodeName(): string {
    return "TLCTerm";
  }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}
