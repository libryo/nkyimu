import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element argument is an inline element within judgments
 * for classifying the arguments in the motivation part of the judgment
 */
export class Argument extends AbstractNode {
  abbreviation = '';

  nodeName = 'argument';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
