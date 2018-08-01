import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Hierarchy } from "../ComplexTypes/Hierarchy";

/**
 * this element is a hierarchical container called
 * "title" either explicitly or due to the local tradition
 */
export class Title extends AbstractNode {
  abbreviation = 't';

  nodeName = 'title';

  readonly CHILDREN_MAP: NodeRules = (new Hierarchy()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
