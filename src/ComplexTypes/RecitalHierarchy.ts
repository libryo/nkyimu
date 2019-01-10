import { Corereq } from "../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { BaseHierarchy } from "./BaseHierarchy";

const type = new BaseHierarchy();

export class RecitalHierarchy implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    recHeiSeq: {
      maxOccur: 1,
      options: {
        intro: { minOccur: 0, maxOccur: 1, options: {} },
        recHeiSeqChoice: {
          choice: true,
          minOccur: 1,
          options: {
            componentRef: { minOccur: 1, maxOccur: 1, options: {} },
            recital: { minOccur: 1, maxOccur: 1, options: {} },
          }
        },
        wrapUp: { minOccur: 0, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Corereq()).items,
  ];
}
