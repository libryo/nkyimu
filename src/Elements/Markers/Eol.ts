import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { EolType } from "../ComplexTypes/EolType";

/**
 * The element eol (end of line) is a marker for where in the original
 * text the line breaks. If the line breaks within a word, place the
 * element BEFORE the word and place the number of characters before
 * the break in the attribute breakAt. One can also specify, if relevant,
 * the hyphen or other character used to signal the break of a word at
 * the end of the line with the attribute breakWith.
 */
export class Eol extends AbstractNode {
  abbreviation = '';

  nodeName = 'eol';

  readonly CHILDREN_MAP: NodeRules = (new EolType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
