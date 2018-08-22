import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group HTMLinline lists the elements that are inline and
 * were inherited from the HTML vocabulary
 */
export class HTMLinline implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    htmlInsChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        b: { minOccur: 1, maxOccur: 1, options: {} },
        i: { minOccur: 1, maxOccur: 1, options: {} },
        a: { minOccur: 1, maxOccur: 1, options: {} },
        u: { minOccur: 1, maxOccur: 1, options: {} },
        sub: { minOccur: 1, maxOccur: 1, options: {} },
        sup: { minOccur: 1, maxOccur: 1, options: {} },
        abbr: { minOccur: 1, maxOccur: 1, options: {} },
        span: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
