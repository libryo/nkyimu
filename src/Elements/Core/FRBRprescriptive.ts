import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BooleanValueType } from "../../ComplexTypes/BooleanValueType";

const type = new BooleanValueType();
/**
 * The element FRBRprescriptive is the metadata property containing a boolean
 * value to determine whether the document contains prescriptive text
 * (i.e., text that is or might become prescriptive, such as an act or a bill)
 * or not (such as, for instance, a non-normative resolution from an assembly.
 */
export class FRBRprescriptive extends AbstractNode {
  abbreviation = 'frbrprescriptive';

  getNodeName(): string { return 'FRBRprescriptive'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}