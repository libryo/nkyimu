import { BlockElements } from "../Groups/BlockElements";
import { PrefaceContainers } from "../Groups/PrefaceContainers";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The complex type prefaceopt defines the content model and
 * attributes used by preface. Here the eId attribute is optional.
 */
export class Prefaceopt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      options: {
        ...(new BlockElements()).CHILDREN_MAP,
        ...(new PrefaceContainers()).CHILDREN_MAP,
      }
    }
  };

  static getRegExp():RegExp {
    const block = BlockElements.getRegExp().source;
    const containers = PrefaceContainers.getRegExp().source;

    return new RegExp(`((${block})|(${containers}))+`);
  }
}