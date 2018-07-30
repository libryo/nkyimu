import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group HTMLblock lists the elements that are blocks and were
 * inherited from the HTML vocabulary
 */
export class HTMLblock implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        ul: { maxOccur: 1, options: {} },
        ol: { maxOccur: 1, options: {} },
        table: { maxOccur: 1, options: {} },
        p: { maxOccur: 1, options: {} },
      }
    }
  };

  static getRegExp(): RegExp {
    return new RegExp('<(ul|ol|table|p)>');
  }
}
