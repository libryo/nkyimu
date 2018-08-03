import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { SubFlowStructure } from "../ComplexTypes/SubFlowStructure";

/**
 * The element authorialNote is a subFlow element containing
 * an authorial (non-editorial) note in the main flow of the text.
 */
export class AuthorialNote extends AbstractNode {
  abbreviation = '';

  nodeName = 'authorialNote';

  readonly CHILDREN_MAP: NodeRules = (new SubFlowStructure()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
