import { BlockElements } from "../Groups/BlockElements";
import { BasicContainers } from "../Groups/BasicContainers";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * the complex type basicopt defines the content model and attributes
 * used by basic containers such as coverPage and conclusions.
 * Here the eId attribute is optional.
 */
export class Basicopt implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      options: {
        ...(new BlockElements()).CHILDREN_MAP,
        ...(new BasicContainers()).CHILDREN_MAP,
      }
    }
  };

  static getRegExp():RegExp {
    const block = BlockElements.getRegExp().source;
    const basic = BasicContainers.getRegExp().source;

    return new RegExp(`(${block}|${basic})+`);
  }
}
