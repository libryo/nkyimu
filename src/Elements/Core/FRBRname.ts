import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ValueType } from "../../ComplexTypes/ValueType";

const type = new ValueType();

/**
 * The element FRBRname is the metadata property containing a string for the title
 * to be used in the work-level IRI of this document
 */
export class FRBRname extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'FRBRname'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}