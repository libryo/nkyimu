import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element concept is is an inline element to identify a
 * text fragment introducing or referring to a concept in
 * the ontology
 */
export class Concept extends AbstractNode {
  abbreviation = '';

  nodeName = 'concept';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
