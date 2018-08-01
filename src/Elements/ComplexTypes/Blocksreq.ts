import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BlockElements } from "../Groups/BlockElements";

/**
 * The complex type blocksreq defines the content model and
 * attributes shared by all containers. Here the eId attribute is required
 */
export class Blocksreq implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    sequence: {
      options: {
        ...(new BlockElements()).CHILDREN_MAP.choice.options,
      }
    }
  };
}
