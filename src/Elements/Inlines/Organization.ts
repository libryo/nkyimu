import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element organization is an inline element to identify a
 * text fragment introducing or referring to an organization
 * in the ontology
 */
export class Organization extends AbstractNode {
  abbreviation = '';

  nodeName = 'organization';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
