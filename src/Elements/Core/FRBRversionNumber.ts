import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ValueType } from "../../ComplexTypes";

const type = new ValueType();
/**
 * The element FRBRversionNumber is the metadata property containing the
 * value of the version number if appropriate to identify the specific
 * expression here contained. It allows an arbitrary string.
 */
export class FRBRversionNumber extends AbstractNode {
  abbreviation = 'frbrversionnumber';

  getNodeName(): string { return 'FRBRversionNumber'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}