import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BlockElements } from "../Groups/BlockElements";

/**
 * The complex type blocksopt defines the content model and attributes
 * shared by all containers. Here the eId attribute is optional
 */
export class Blocksopt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    sequence: {
      minOccur: 0,
      options: {
        ...(new BlockElements()).CHILDREN_MAP,
      }
    }
  };
}
