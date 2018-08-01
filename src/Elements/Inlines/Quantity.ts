import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element quantity is an inline element to identify a text
 * fragment introducing or referring to a quantity. This could
 * be a dimensionless number, or a number referring to a length,
 * weight, duration, etc. or even a sum of money. The attribute
 * normalized contains the value normalized in a number, if
 * appropriate.
 */
export class Quantity extends AbstractNode {
  abbreviation = '';

  nodeName = 'quantity';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
