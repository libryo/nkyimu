import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element decoration is an inline element to represent
 * a decorative aspect that is present in the orignal text
 * and that is meant as additional information to the text
 * (e.g., the annotation 'new' on the side of a freshly
 * inserted structure.
 */
export class Decoration extends AbstractNode {
  abbreviation = '';

  nodeName = 'decoration';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
