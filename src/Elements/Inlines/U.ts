import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element u is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the underline style (an inline)
 */
export class U extends AbstractNode {
  abbreviation = '';

  nodeName = 'u';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
