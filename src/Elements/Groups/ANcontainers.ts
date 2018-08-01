import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group ANcontainers lists the elements that are containers
 * and are specific to the Akoma Ntoso debate vocabulary
 */
export class ANcontainers implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        speechGroup: { maxOccur: 1, options: {} },
        speech: { maxOccur: 1, options: {} },
        question: { maxOccur: 1, options: {} },
        answer: { maxOccur: 1, options: {} },
        other: { maxOccur: 1, options: {} },
        scene: { maxOccur: 1, options: {} },
        narrative: { maxOccur: 1, options: {} },
        summary: { maxOccur: 1, options: {} },
      }
    }
  };
}
