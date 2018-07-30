import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The group prefaceContainers lists the elements that are containers
 * and are specific to the Akoma Ntoso preface vocabulary.
 */
export class PrefaceContainers implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        longTitle: { maxOccur: 1, options: {} },
        formula: { maxOccur: 1, options: {} },
        container: { maxOccur: 1, options: {} },
      }
    }
  };
  
  static getRegExp(): RegExp {
    return new RegExp('<(longTitle|formula|container)>');
  }
}
