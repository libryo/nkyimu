import { AbstractNode } from "../../Abstracts/AbstractNode";
import { For } from "../../AttributeGroups/For";
import { Quote } from "../../AttributeGroups/Quote";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * the element quotedText is an inline element containing a small string
 * that is used either as the text being replaced, or the replacement,
 * or the positioning at which some modification should take place.
 * Attribute quote is used to specify the quote character used in the
 * original; no quote attribute implies that the quote is left in the text;
 * quote="" implies that there is no quote character. Attribute for is used
 * to point to the eId of the corresponding ref element.
 */
export class QuotedText extends AbstractNode {
  abbreviation = 'quotedtext'

  getNodeName(): string { return 'quotedText'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Quote()).items,
    ...(new For()).items,
  ];
}
