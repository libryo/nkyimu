import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element location is an inline element to identify a text
 * fragment introducing or referring to a location in the ontology
 */
export class Location extends AbstractNode {
  abbreviation = '';

  nodeName = 'location';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
