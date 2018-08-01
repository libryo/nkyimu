import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { RecitalHierarchy } from "../ComplexTypes/RecitalHierarchy";

/**
 * The element recitals is the section of the preamble that contains recitals.
 */
export class Recitals extends AbstractNode {
  abbreviation = '';

  nodeName = 'recitals';

  readonly CHILDREN_MAP: NodeRules = (new RecitalHierarchy()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
