import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group basicContainers lists the elements that are containers and are specific to
 * vocabulary of preambles, prefaces, conclusions and coverPages
 */
export class BasicContainers implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    bContChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        longTitle: { minOccur: 1, maxOccur: 1, options: {} },
        formula: { minOccur: 1, maxOccur: 1, options: {} },
        container: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}