import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { EolType } from "../ComplexTypes/EolType";

const type = new EolType();

/**
 * The element eop (end of page) is a marker for where in the
 * original text the page breaks. Do NOT use a eol element, too.
 * If the page breaks within a word, place the element BEFORE
 * the word and place the number of characters before the break
 * in the attribute breakAt. One can also specify, if relevant,
 * the hyphen or other character used to signal the break of a
 * word at the end of the page with the attribute breakWith.
 */
export class Eop extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'eop'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
