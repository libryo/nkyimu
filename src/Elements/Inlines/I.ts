import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element i is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the italic style (an inline)
 */
export class I extends AbstractNode {
  abbreviation = '';

  nodeName = 'i';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
