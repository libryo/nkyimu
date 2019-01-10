import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { ANblock } from "./ANblock";
import { HTMLblock } from "./HTMLblock";

/**
 * The group blockElements lists all the elements that are blocks.
 */
export class BlockElements implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    blkElsChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        anBlkGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new ANblock()).CHILDREN_MAP,
          }
        },
        htmlBlkGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new HTMLblock()).CHILDREN_MAP,
          }
        },
        foreign: { minOccur: 1, maxOccur: 1, options: {} },
        block: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
