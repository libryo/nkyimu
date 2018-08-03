import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element sub is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the subscript style (an inline)
 */
export class Sub extends AbstractNode {
  abbreviation = '';

  nodeName = 'sub';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
