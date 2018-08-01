import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element role is an inline element to identify a text
 * fragment introducing or referring to a role in the ontology
 */
export class Role extends AbstractNode {
  abbreviation = '';

  nodeName = 'role';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
