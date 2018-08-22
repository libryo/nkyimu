import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group HTMLblock lists the elements that are blocks and were
 * inherited from the HTML vocabulary
 */
export class HTMLblock implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    htmlBlksChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        ul: { minOccur: 1, maxOccur: 1, options: {} },
        ol: { minOccur: 1, maxOccur: 1, options: {} },
        table: { minOccur: 1, maxOccur: 1, options: {} },
        p: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
