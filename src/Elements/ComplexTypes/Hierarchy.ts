import { Corereq } from "../../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HierElements } from "../Groups/HierElements";
import { BaseHierarchy } from "./BaseHierarchy";

const type = new BaseHierarchy();

/**
 * The complex type hierarchy is used by most or all the hierarchical
 * elements of act-like documents.
 */
export class Hierarchy extends BaseHierarchy {

  readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    hieChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        hieChoiceSeq: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            intro: { minOccur: 1, maxOccur: 1, options: {} },
            hieChoiceSeqChoice: {
              minOccur: 0,
              options: {
                componentRef: { minOccur: 1, maxOccur: 1, options: {} },
                hieChoiceSeqChoiceGrp: {
                  minOccur: 1,
                  maxOccur: 1,
                  options: {
                    ...(new HierElements()).CHILDREN_MAP,
                  }
                },
                crossHeading: { minOccur: 1, maxOccur: 1, options: {} },
              }
            },
            wrapUp: { minOccur: 0, maxOccur: 1, options: {} },
          },
        },
        content: { minOccur: 1, maxOccur: 1, options: {} },
      }
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Corereq()).items,
  ];
}
