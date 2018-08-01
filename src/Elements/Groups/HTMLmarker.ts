import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The group HTMLmarker lists the elements that are marker and
 * were inherited from the HTML vocabulary
 */
export class HTMLmarker implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        img: { maxOccur: 1, options: {} },
        br: { maxOccur: 1, options: {} },
      },
    },
  };
}