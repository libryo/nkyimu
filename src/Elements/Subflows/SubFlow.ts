import { AbstractNode } from "../../Abstract/AbstractNode";
import { Name } from "../../AttributeGroups/Name";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { SubFlowStructure } from "../ComplexTypes/SubFlowStructure";

const type = new SubFlowStructure();

/**
 * The element subFlow is a generic element for a subFlow.
 */
export class SubFlow extends AbstractNode {
  abbreviation = '';

  nodeName = 'subFlow';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];
}
