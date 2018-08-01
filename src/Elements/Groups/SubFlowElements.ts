import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { ANsubFlow } from "./ANsubFlow";

/**
 * The group subFlowElements lists all the elements that are subFlows.
 */
export class SubFlowElements implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        ...(new ANsubFlow()).CHILDREN_MAP,
        subFlow: { maxOccur: 1, options: {} },
      },
    },
  };
}
