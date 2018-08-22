import { Corereq } from "../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { BlockElements } from "../ElementGroups/BlockElements";

/**
 * The complex type blocksreq defines the content model and
 * attributes shared by all containers. Here the eId attribute is required
 */
export class Blocksreq implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    blkSeq: {
      minOccur: 0,
      options: {
        blkSeqGrp: {
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
    ...(new Corereq()).items
  ];
}
