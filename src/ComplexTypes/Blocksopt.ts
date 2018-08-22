import { Coreopt } from "../AttributeGroups/Coreopt";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { BlockElements } from "../ElementGroups/BlockElements";

/**
 * The complex type blocksopt defines the content model and attributes
 * shared by all containers. Here the eId attribute is optional
 */
export class Blocksopt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    blkOptSeq: {
      minOccur: 0,
      options: {
        blkOptSeqGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new BlockElements()).CHILDREN_MAP,
          }
        }
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items
  ];
}
