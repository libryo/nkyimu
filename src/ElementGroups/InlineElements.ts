import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { AmendmentInline } from "./AmendmentInline";
import { ANheaderInline } from "./ANheaderInline";
import { ANinline } from "./ANinline";
import { ANsemanticInline } from "./ANsemanticInline";
import { ANtitleInline } from "./ANtitleInline";
import { HTMLinline } from "./HTMLinline";

/**
 * The group inlineElements lists all the elements that are inline.
 */
export class InlineElements implements HasChildrenMap {
  public readonly CHILDREN_MAP: NodeRules = {
    inElsChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        anInsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new ANinline()).CHILDREN_MAP,
          }
        },
        anHtmlInsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new HTMLinline()).CHILDREN_MAP,
          }
        },
        anTitInsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new ANtitleInline()).CHILDREN_MAP,
          }
        },
        anSemInsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new ANsemanticInline()).CHILDREN_MAP,
          }
        },
        anHeadInsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new ANheaderInline()).CHILDREN_MAP,
          }
        },
        amdInsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new AmendmentInline()).CHILDREN_MAP,
          }
        },
        inline: { minOccur: 1, maxOccur: 1, options: {}
      },
    }},
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
