import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element abbr is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the specification of an abbreviation or an
 * acronym (an inline). As in HTML, use attribute title to specify
 * the full expansion of the abbreviation or acronym.
 */
export class Abbr extends AbstractNode {
  abbreviation = '';

  nodeName = 'abbr';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
