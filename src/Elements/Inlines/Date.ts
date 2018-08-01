import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element date is an inline element to identify a date
 * expressed in the text and to propose a normalized
 * representation in the date attribute.
 */
export class Date extends AbstractNode {
  abbreviation = '';

  nodeName = 'date';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
