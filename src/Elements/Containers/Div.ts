import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksreq } from "../ComplexTypes/Blocksreq";

/**
 * The element div is an HTML element, but is NOT used in Akoma Ntoso
 * as in HTML. Instead of being used as a generic block, Akoma Ntoso
 * uses div as a generic container (as in common practice).
 */
export class Div extends AbstractNode {
  abbreviation = '';

  nodeName = 'div';

  readonly CHILDREN_MAP: NodeRules = (new Blocksreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
