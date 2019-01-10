import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group ANblock lists the elements that are blocks and are specific to
 * the Akoma Ntoso vocabulary
 */
export class ANblock implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    anBlks: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        blockList: { minOccur: 1, maxOccur: 1, options: {} },
        blockContainer: { minOccur: 1, maxOccur: 1, options: {} },
        tblock: { minOccur: 1, maxOccur: 1, options: {} },
        toc: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
