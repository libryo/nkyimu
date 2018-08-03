import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { SubFlowStructure } from "../ComplexTypes/SubFlowStructure";

/**
 * The element subFlow is a generic element for a subFlow.
 */
export class SubFlow extends AbstractNode {
  abbreviation = '';

  nodeName = 'subFlow';

  readonly CHILDREN_MAP: NodeRules = (new SubFlowStructure()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
