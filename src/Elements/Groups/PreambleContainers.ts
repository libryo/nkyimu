import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The group preambleContainers lists the elements that are containers
 * and are specific to the Akoma Ntoso preamble vocabulary.
 */
export class PreambleContainers implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        recitals: { maxOccur: 1, options: {} },
        citations: { maxOccur: 1, options: {} },
        formula: { maxOccur: 1, options: {} },
        container: { maxOccur: 1, options: {} },
      }
    }
  };

  static getRegExp(): RegExp {
    return new RegExp('<(recitals|citations|formula|container)>');
  }
}
