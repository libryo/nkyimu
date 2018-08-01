import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The blockListType is the type of element blockList
 */
export class BlockListType implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    sequence: {
      options: {
        listIntroduction: { maxOccur: 1, options: {} },
        item: { minOccur: 1, options: {} },
        listWrapUp: { maxOccur: 1, options: {} },
      }
    }
  };
}
