import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element legislature is an inline element within preface
 * to identify the string used by the document for the
 * legislature relative to the document. Use #refersTo to a
 * TLCEvent to refer to the event of the specific legislature.
 */
export class Legislature extends AbstractNode {
  abbreviation = '';

  nodeName = 'legislature';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
