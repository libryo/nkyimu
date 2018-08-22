import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ValueType } from "../../ComplexTypes/ValueType";

const type = new ValueType();
/**
 * The element FRBRuri is the metadata property containing the IRI of the whole document.
 */
export class FRBRuri extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'FRBRuri'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}