import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ValueType } from "../ComplexTypes/ValueType";

const type = new ValueType();
/**
 * The element FRBRformat is the metadata property containing the Internet
 * Media Type specification for the data format to be used in the manifestation-level IRI of this document.
 */
export class FRBRformat extends AbstractNode {
  abbreviation = '';

  nodeName = 'FRBRformat';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}