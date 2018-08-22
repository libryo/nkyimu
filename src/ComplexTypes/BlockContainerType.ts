import { Corereq } from "../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { BlockElements } from "../ElementGroups/BlockElements";
import { BaseHierarchy } from "./BaseHierarchy";

/**
 * The blockContainerType is the type of element blockContainer
 */
export class BlockContainerType implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    ...(new BaseHierarchy()).CHILDREN_MAP,
    blkConTypeSeq: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        intro: { minOccur: 0, maxOccur: 1, options: {} },
        blkConTypeSeqCh: {
          choice: true,
          minOccur: 1,
          options: {
            componentRef: { minOccur: 1, maxOccur: 1, options: {} },
            grpBlkEls: {
              minOccur: 1,
              maxOccur: 1,
              options: {
                ...(new BlockElements()).CHILDREN_MAP,
              }
            },
            crossHeading: { minOccur: 1, maxOccur: 1, options: {} },
          }
        },
        wrapUp: { maxOccur: 1, minOccur: 0, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items
  ];
}