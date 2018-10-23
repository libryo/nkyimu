import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group ANinline lists the elements that are inline and
 * are specific to the Akoma Ntoso vocabulary
 */
export class ANinline implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    anInsChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        ref: { minOccur: 1, maxOccur: 1, options: {} },
        mref: { minOccur: 1, maxOccur: 1, options: {} },
        rref: { minOccur: 1, maxOccur: 1, options: {} },
        mod: { minOccur: 1, maxOccur: 1, options: {} },
        rmod: { minOccur: 1, maxOccur: 1, options: {} },
        remark: { minOccur: 1, maxOccur: 1, options: {} },
        recordedTime: { minOccur: 1, maxOccur: 1, options: {} },
        vote: { minOccur: 1, maxOccur: 1, options: {} },
        outcome: { minOccur: 1, maxOccur: 1, options: {} },
        ins: { minOccur: 1, maxOccur: 1, options: {} },
        del: { minOccur: 1, maxOccur: 1, options: {} },
        omissis: { minOccur: 1, maxOccur: 1, options: {} },
        embeddedText: { minOccur: 1, maxOccur: 1, options: {} },
        embeddedStructure: { minOccur: 1, maxOccur: 1, options: {} },
        opinion: { minOccur: 1, maxOccur: 1, options: {} },
        placeholder: { minOccur: 1, maxOccur: 1, options: {} },
        fillIn: { minOccur: 1, maxOccur: 1, options: {} },
        decoration: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
