import { BlockElements } from "../Groups/BlockElements";
import { PreambleContainers } from "../Groups/PreambleContainers";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The complex type preambleopt defines the content model and
 * attributes used by preambles. Here the eId attribute is optional.
 */
export class Preambleopt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        ...(new BlockElements()).CHILDREN_MAP,
        ...(new PreambleContainers()).CHILDREN_MAP,
      }
    }
  };


  static getRegExp():RegExp {
    const block = BlockElements.getRegExp().source;
    const containers = PreambleContainers.getRegExp().source;

    return new RegExp(`((${block})|(${containers}))+`);
  }
}