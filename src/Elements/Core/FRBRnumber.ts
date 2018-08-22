import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ValueType } from "../../ComplexTypes/ValueType";

const type = new ValueType();

/**
 * The element FRBRnumber is the metadata property containing a string or number
 * for the number to be used in the work-level IRI of this document
 */
export class FRBRnumber extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'FRBRnumber'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}