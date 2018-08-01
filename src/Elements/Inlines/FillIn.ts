import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element fillIn is an inline element shown as a dotted
 * line or any other typoaphical characteristics to represent
 * a fill-in element in a printed form, that is as ane example
 * of an actual form. It is NOT meant to be used for form
 * elements as in HTML, i.e. as a way to collect input from
 * the reader and deliver to some server-side process.
 */
export class FillIn extends AbstractNode {
  abbreviation = '';

  nodeName = 'fillIn';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
