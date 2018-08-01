import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element process is an inline element to identify a text
 * fragment introducing or referring to a process in the ontology
 */
export class Process extends AbstractNode {
  abbreviation = '';

  nodeName = 'process';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
