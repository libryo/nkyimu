import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Source } from "../../AttributeGroups/Source";
import { ReferenceType } from "../../ComplexTypes/ReferenceType";
import { EIdAttribute } from "../../Attributes/EIdAttribute";
import { ShortFormAttribute } from "../../Attributes/ShortFormAttribute";
import { ShowAsAttribute } from "../../Attributes/ShowAsAttribute";
import { HrefAttribute } from "../../Attributes/HrefAttribute";
import { GUIDAttribute } from "../../Attributes/GUIDAttribute";
import { WIdAttribute } from "../../Attributes/WIdAttribute";

const type = new ReferenceType();
/**
 * The element TLCConcept is a metadata reference to the
 * Akoma Ntoso IRI of an ontology instance of the class Concept
 */
export class TLCConcept extends AbstractNode {
  abbreviation = "tlcconcept";

  getNodeName(): string {
    return "TLCConcept";
  }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}
