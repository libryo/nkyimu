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
    choice: {
      maxOccur: 1,
      options: {
        sequence: {
          options: {
            intro: { maxOccur: 1, options: {} },
            choice: {
              options: {
                componentRef: { maxOccur: 1, options: {} },
                ...(new HierElements()).CHILDREN_MAP,
                crossHeading: { maxOccur: 1, options: {} },
              }
            },
            wrapUp: { maxOccur: 1, options: {} },
          },
        },
        content: { maxOccur: 1, options: {} },
      }
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Corereq()).items,
  ];
}
