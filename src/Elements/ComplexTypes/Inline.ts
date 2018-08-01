import { NodeRules } from "../../Interfaces/NodeRules";
import { InlineCM } from "../Groups/InlineCM";

/**
 * The complex type inline defines the content model and
 * attributes shared by all blocks and inlines. Here the
 * eId attribute is optional
 */
export class Inline {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      minOccur: 0,
      options: {
        ...(new InlineCM()).CHILDREN_MAP,
      }
    },
  };
}
