import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The group amendmentInline lists the inline elements that
 * should be found in the preface of an amendment.
 */
export class AmendmentInline implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        affectedDocument: { maxOccur: 1, options: {} },
        relatedDocument: { maxOccur: 1, options: {} },
        change: { maxOccur: 1, options: {} },
      },
    },
  };
}
