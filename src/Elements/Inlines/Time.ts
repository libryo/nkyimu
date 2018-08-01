import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element time is an inline element to identify a time
 * expressed in the text and to propose a normalized
 * representation in the time attribute.
 */
export class Time extends AbstractNode {
  abbreviation = '';

  nodeName = 'time';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
