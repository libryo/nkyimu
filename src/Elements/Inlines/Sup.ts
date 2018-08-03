import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element span is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the generic inline.
 */
export class Sup extends AbstractNode {
  abbreviation = '';

  nodeName = 'sup';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
