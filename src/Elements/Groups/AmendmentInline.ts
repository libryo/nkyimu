import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group amendmentInline lists the inline elements that
 * should be found in the preface of an amendment.
 */
export class AmendmentInline implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    amdInLineSeq: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        affectedDocument: { minOccur: 1, maxOccur: 1, options: {} },
        relatedDocument: { minOccur: 1, maxOccur: 1, options: {} },
        change: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
