import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element object is is an inline element to identify a
 * text fragment introducing or referring to an object in
 * the ontology
 */
export class Object extends AbstractNode {
  abbreviation = '';

  nodeName = 'object';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
