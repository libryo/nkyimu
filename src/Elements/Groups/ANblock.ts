import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The group ANblock lists the elements that are blocks and are specific to
 * the Akoma Ntoso vocabulary
 */
export class ANblock implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        blockList: { maxOccur: 1, options: {} },
        blockContainer: { maxOccur: 1, options: {} },
        tblock: { maxOccur: 1, options: {} },
        toc: { maxOccur: 1, options: {} },
      }
    }
  };
  
  static getRegExp(): RegExp {
    return new RegExp('<(blockList|blocktblock|container|toc)>');
  }
}
