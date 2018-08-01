import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Hierarchy } from "../ComplexTypes/Hierarchy";

/**
 * This element is a hierarchical container called
 * "clause" either explicitly or due to the local tradition
 */
export class Clause extends AbstractNode {
  abbreviation = 'cl';

  nodeName = 'clause';

  readonly CHILDREN_MAP: NodeRules = (new Hierarchy()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}