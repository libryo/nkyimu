import { Corereq } from "../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { NodeRules } from "../Interfaces/NodeRules";
import { BlockElements } from "../ElementGroups/BlockElements";
import { BaseHierarchy } from "./BaseHierarchy";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";

const type = new BaseHierarchy();

/**
 * The complex type itemType is similar to a hierarchical
 * element, but is isolated and does not belong to a full
 * hierarchy.
 */
export class ItemType extends BaseHierarchy implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    itmTypeSeq: {
      minOccur: 1,
      options: {
        ...(new BlockElements()).CHILDREN_MAP
      }
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Corereq()).items,
  ];
}
