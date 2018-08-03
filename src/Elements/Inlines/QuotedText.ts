import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

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
  abbreviation = '';

  nodeName = 'quotedText';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
