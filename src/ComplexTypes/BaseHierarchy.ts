import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The complex type basehierarchy is not used by any element, but is
 * derived by other types to contain the basic structure of hierarchical
 * elements
 */
export class BaseHierarchy implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    bHies: {
      choice: true,
      minOccur: 0,
      options: {
        num: { minOccur: 0, maxOccur: 1, options: {} },
        heading: { minOccur: 0, maxOccur: 1, options: {} },
        subheading: { minOccur: 0, maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
