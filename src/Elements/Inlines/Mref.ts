import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element mref is an inline element containing multiple
 * references (each in turn represented by a ref element)
 */
export class Mref extends AbstractNode {
  abbreviation = '';

  nodeName = 'mref';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
