import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { ANsubFlow } from "./ANsubFlow";

/**
 * The group subFlowElements lists all the elements that are subFlows.
 */
export class SubFlowElements implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    subFlowElsChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        anSubFlowsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new ANsubFlow()).CHILDREN_MAP,
          }
        },
        subFlow: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
