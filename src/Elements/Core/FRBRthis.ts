import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ValueType } from "../ComplexTypes/ValueType";

const type = new ValueType();
/**
 * The element FRBRthis is the metadata property containing the IRI of the
 * specific component of the document
 */
export class FRBRthis extends AbstractNode {
  abbreviation = '';

  nodeName = 'FRBRthis';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}