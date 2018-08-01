import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element embeddedText is an inline element containing
 * a string used as an extract from another document. Attribute
 * quote is used to specify the quote character used in the
 * original; no quote attribute implies that the quote is left
 * in the text; quote="" implies that there is no quote character.
 */
export class EmbeddedText extends AbstractNode {
  abbreviation = '';

  nodeName = 'embeddedText';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
