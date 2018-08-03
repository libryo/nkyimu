import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * The element lawyer is an inline element within judgments to identify where
 * the document defines one of the lawyers, his/her role, which party it
 * represents, and the other lawyer, if any, this lawyer received the power
 * delegation of power in some role
 */
export class Lawyer extends AbstractNode {
  abbreviation = '';

  nodeName = 'lawyer';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
