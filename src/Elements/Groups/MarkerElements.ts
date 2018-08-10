import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ANmarker } from "./ANmarker";
import { HTMLmarker } from "./HTMLmarker";

/**
 * The group markerElements lists all the elements that are markers.
 */
export class MarkerElements implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        ...(new ANmarker()).CHILDREN_MAP,
        ...(new HTMLmarker()).CHILDREN_MAP,
        marker: { maxOccur: 1, options: {} },
      },
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
