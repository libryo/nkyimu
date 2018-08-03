import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element p is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the generic paragraph of text (a block)
 */
export class P extends AbstractNode {
  abbreviation = '';

  nodeName = 'p';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
