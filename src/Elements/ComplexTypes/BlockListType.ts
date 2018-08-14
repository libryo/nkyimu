import { Corereq } from "../../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The blockListType is the type of element blockList
 */
export class BlockListType implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    blkLstTypeSeq: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        listIntroduction: { minOccur: 0, maxOccur: 1, options: {} },
        item: { minOccur: 1, options: {} },
        listWrapUp: { minOccur: 0, maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items
  ];
}
