import { BlockElements } from "../Groups/BlockElements";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The complex type containerType is the content model for the generic
 * element for a container. It can be placed in a container instead of
 * any of the other containers. The attribute name is required and gives
 * a name to the element.
 */
export class ContainerType implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      options: {
        ...(new BlockElements()).CHILDREN_MAP,
        container: { maxOccur: 1, options: {} }
      }
    }
  };
}
