import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ValueType } from "../ComplexTypes/ValueType";
import { Name } from "../../AttributeGroups/Name";

const type = new ValueType();
/**
 * The element FRBRalias is the metadata property containing additional well-known
 * names of the document in the respective level of the FRBR hierarchy
 */
export class FRBRalias extends AbstractNode {
  abbreviation = '';

  nodeName = 'FRBRalias';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];
}