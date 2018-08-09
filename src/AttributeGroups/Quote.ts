import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { EndQuoteAttribute } from "../Attributes/EndQuoteAttribute";
import { InlineQuoteAttribute } from "../Attributes/InlineQuoteAttribute";
import { StartQuoteAttribute } from "../Attributes/StartQuoteAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attributes startQuote and endQuote are used in quotedText, quotedStructure,
 * embeddedText and embeddedStructure to specify the start and quote character
 * delimiting the quoted or embedded part. If the characters are the same, one can
 * use only startQuote. Attribute inlineQuote is used for marking the character
 * showing continuation of a quote e.g. at the beginning of each page or at the
 * beginning of each line of the quote
 */
export class Quote extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: StartQuoteAttribute, required: false },
    { attribute: EndQuoteAttribute, required: false },
    { attribute: InlineQuoteAttribute, required: false },
  ];
}