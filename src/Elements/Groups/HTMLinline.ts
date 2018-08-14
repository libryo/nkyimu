import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group HTMLinline lists the elements that are inline and
 * were inherited from the HTML vocabulary
 */
export class HTMLinline implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    htmlIns: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        b: { maxOccur: 1, options: {} },
        i: { maxOccur: 1, options: {} },
        a: { maxOccur: 1, options: {} },
        u: { maxOccur: 1, options: {} },
        sub: { maxOccur: 1, options: {} },
        sup: { maxOccur: 1, options: {} },
        abbr: { maxOccur: 1, options: {} },
        span: { maxOccur: 1, options: {} },
      },
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
