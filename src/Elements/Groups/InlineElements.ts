import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
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
  readonly CHILDREN_MAP: NodeRules = {
    inels: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        ...(new ANinline()).CHILDREN_MAP,
        ...(new HTMLinline()).CHILDREN_MAP,
        ...(new ANtitleInline()).CHILDREN_MAP,
        ...(new ANsemanticInline()).CHILDREN_MAP,
        ...(new ANheaderInline()).CHILDREN_MAP,
        ...(new AmendmentInline()).CHILDREN_MAP,
        inline: { maxOccur: 1, options: {}
      },
    }},
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
