import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element vote is an inline that wraps either the name
 * of the voter (when organized by choice) or the vote
 * (when organized by name) in a voting report.
 */
export class Vote extends AbstractNode {
  abbreviation = '';

  nodeName = 'vote';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
