import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element num is a heading element in a hierarchy that contains
 * a number or any other ordered mechanism to identify the structure.
 */
export class Num extends AbstractNode {
  abbreviation = '';

  nodeName = 'num';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
