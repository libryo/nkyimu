import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Hierarchy } from "../ComplexTypes/Hierarchy";

/**
 * this element is a hierarchical container called
 * "sublist" either explicitly or due to the local tradition
 */
export class Sublist extends AbstractNode {
  abbreviation = 'sl';

  nodeName = 'sublist';

  readonly CHILDREN_MAP: NodeRules = (new Hierarchy()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
