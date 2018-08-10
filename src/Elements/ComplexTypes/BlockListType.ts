import { Corereq } from "../../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

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

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items
  ];
}
