import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereq } from "../ComplexTypes/Inlinereq";

/**
 * The element rref is an inline element containing a range
 * of references between the IRI specified in the from attribute
 * and the one specified in the upTo attribute.
 */
export class Rref extends AbstractNode {
  abbreviation = '';

  nodeName = 'rref';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
