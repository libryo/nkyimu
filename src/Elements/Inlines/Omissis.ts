import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element omissis is an inline element for the specification
 * of a text that substitutes a textual omission
 * (e.g., dots, spaces, the word "omissis", etc.
 */
export class Omissis extends AbstractNode {
  abbreviation = '';

  nodeName = 'omissis';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
