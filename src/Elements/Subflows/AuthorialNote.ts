import { AbstractNode } from "../../Abstract/AbstractNode";
import { Notes } from "../../AttributeGroups/Notes";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { SubFlowStructure } from "../ComplexTypes/SubFlowStructure";

const type = new SubFlowStructure();

/**
 * The element authorialNote is a subFlow element containing
 * an authorial (non-editorial) note in the main flow of the text.
 */
export class AuthorialNote extends AbstractNode {
  abbreviation = '';

  nodeName = 'authorialNote';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Notes()).items,
  ];
}
