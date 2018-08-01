import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element opinion is an inline element to identify where
 * the document defines the opinion of an actor
 */
export class Opinion extends AbstractNode {
  abbreviation = '';

  nodeName = 'opinion';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
