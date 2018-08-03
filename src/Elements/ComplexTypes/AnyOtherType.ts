import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The complex type anyOtherType defines an open content model for
 * elements that may use elements from other namespaces.
 */
export class AnyOtherType implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      options: {
        any: { minOccur: 0, options: {} },
      }
    }
  };
}
