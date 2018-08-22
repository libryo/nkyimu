import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group ANmarker lists the elements that are markers and are
 * specific to the Akoma Ntoso vocabulary
 */
export class ANmarker implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    anMarkerChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        noteRef: { minOccur: 1, maxOccur: 1, options: {} },
        eol: { minOccur: 1, maxOccur: 1, options: {} },
        eop: { minOccur: 1, maxOccur: 1, options: {} },
      },
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
