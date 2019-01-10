import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group HTMLcontainers lists the elements that are containers
 * and were inherited from the HTML vocabulary
 */
export class HTMLcontainers implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    htmlContSeq: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        div: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}