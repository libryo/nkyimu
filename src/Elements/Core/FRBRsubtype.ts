import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ValueType } from "../../ComplexTypes/ValueType";

const type = new ValueType();
/**
 * The element FRBRsubtype is the metadata property containing a string for the specific
 * subtype of the document to be used in the work-level IRI of this document
 */
export class FRBRsubtype extends AbstractNode {
  abbreviation = 'frbrsubtype';

  getNodeName(): string { return 'FRBRsubtype'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}