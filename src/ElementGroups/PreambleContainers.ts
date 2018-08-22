import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group preambleContainers lists the elements that are containers
 * and are specific to the Akoma Ntoso preamble vocabulary.
 */
export class PreambleContainers implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    preContChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        recitals: { minOccur: 1, maxOccur: 1, options: {} },
        citations: { minOccur: 1, maxOccur: 1, options: {} },
        formula: { minOccur: 1, maxOccur: 1, options: {} },
        container: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
