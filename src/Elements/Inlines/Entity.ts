import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element entity is a generic inline element to identify
 * a text fragment introducing or referring to a concept in
 * the ontology
 */
export class Entity extends AbstractNode {
  abbreviation = '';

  nodeName = 'entity';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
