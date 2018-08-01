import { NodeRules } from "../../Interfaces/NodeRules";
import { BlockElements } from "../Groups/BlockElements";
import { BaseHierarchy } from "./BaseHierarchy";

/**
 * The complex type itemType is similar to a hierarchical
 * element, but is isolated and does not belong to a full
 * hierarchy.
 */
export class ItemType extends BaseHierarchy {

  readonly CHILDREN_MAP: NodeRules = {
    ...(new BaseHierarchy()).CHILDREN_MAP,
    sequence: {
      minOccur: 1,
      options: {
        ...(new BlockElements()).CHILDREN_MAP
      }
    },
  };
}
