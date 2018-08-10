import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group basicContainers lists the elements that are containers and are specific to
 * vocabulary of preambles, prefaces, conclusions and coverPages
 */
export class BasicContainers implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        longTitle: { maxOccur: 1, options: {} },
        formula: { maxOccur: 1, options: {} },
        container: { maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}