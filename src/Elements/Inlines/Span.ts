import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element sup is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the superscript style (an inline)
 */
export class Span extends AbstractNode {
  abbreviation = '';

  nodeName = 'span';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
