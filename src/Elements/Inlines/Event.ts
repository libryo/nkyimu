import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element event is an inline element to identify a text
 * fragment introducing or referring to an event in the ontology
 */
export class Event extends AbstractNode {
  abbreviation = '';

  nodeName = 'event';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
