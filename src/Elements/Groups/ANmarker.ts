import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group ANmarker lists the elements that are markers and are
 * specific to the Akoma Ntoso vocabulary
 */
export class ANmarker implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        noteRef: { maxOccur: 1, options: {} },
        eol: { maxOccur: 1, options: {} },
        eop: { maxOccur: 1, options: {} },
      },
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
