import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group HTMLmarker lists the elements that are marker and
 * were inherited from the HTML vocabulary
 */
export class HTMLmarker implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    htmlMsChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        img: { minOccur: 1, maxOccur: 1, options: {} },
        br: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}