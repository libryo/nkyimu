import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { ANmarker } from "./ANmarker";
import { HTMLmarker } from "./HTMLmarker";

/**
 * The group markerElements lists all the elements that are markers.
 */
export class MarkerElements implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    mElsEChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        anMarksGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new ANmarker()).CHILDREN_MAP,
          }
        },
        htmlMarksGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new HTMLmarker()).CHILDREN_MAP,
          }
        },
        marker: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
