import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ANblock } from "./ANblock";
import { HTMLblock } from "./HTMLblock";

/**
 * The group blockElements lists all the elements that are blocks.
 */
export class BlockElements implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        ...(new ANblock()).CHILDREN_MAP,
        ...(new HTMLblock()).CHILDREN_MAP,
        foreign: { maxOccur: 1, options: {} },
        block: { maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
