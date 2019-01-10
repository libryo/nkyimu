import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group ANcontainers lists the elements that are containers
 * and are specific to the Akoma Ntoso debate vocabulary
 */
export class ANcontainers implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    anContChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        speechGroup: { minOccur: 1, maxOccur: 1, options: {} },
        speech: { minOccur: 1, maxOccur: 1, options: {} },
        question: { minOccur: 1, maxOccur: 1, options: {} },
        answer: { minOccur: 1, maxOccur: 1, options: {} },
        other: { minOccur: 1, maxOccur: 1, options: {} },
        scene: { minOccur: 1, maxOccur: 1, options: {} },
        narrative: { minOccur: 1, maxOccur: 1, options: {} },
        summary: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
