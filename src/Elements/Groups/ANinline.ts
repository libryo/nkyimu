import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The group ANinline lists the elements that are inline and
 * are specific to the Akoma Ntoso vocabulary
 */
export class ANinline implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        ref: { maxOccur: 1, options: {} },
        mref: { maxOccur: 1, options: {} },
        rref: { maxOccur: 1, options: {} },
        mod: { maxOccur: 1, options: {} },
        rmod: { maxOccur: 1, options: {} },
        remark: { maxOccur: 1, options: {} },
        recordedTime: { maxOccur: 1, options: {} },
        vote: { maxOccur: 1, options: {} },
        outcome: { maxOccur: 1, options: {} },
        ins: { maxOccur: 1, options: {} },
        del: { maxOccur: 1, options: {} },
        omissis: { maxOccur: 1, options: {} },
        embeddedText: { maxOccur: 1, options: {} },
        embeddedStructure: { maxOccur: 1, options: {} },
        opinion: { maxOccur: 1, options: {} },
        placeholder: { maxOccur: 1, options: {} },
        fillIn: { maxOccur: 1, options: {} },
        decoration: { maxOccur: 1, options: {} },
      },
    },
  };
}
