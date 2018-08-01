import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Hierarchy } from "../ComplexTypes/Hierarchy";

/**
 * this element is a hierarchical container called
 * "subsection" either explicitly or due to the local tradition
 */
export class Subsection extends AbstractNode {
  abbreviation = 'ss';

  nodeName = 'subsection';

  readonly CHILDREN_MAP: NodeRules = (new Hierarchy()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
