import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element b is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the bold style (an inline)
 */
export class B extends AbstractNode {
  abbreviation = '';

  nodeName = 'b';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
