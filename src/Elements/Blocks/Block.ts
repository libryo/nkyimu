import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element block is a generic element for a block. It can
 * be placed in a container instead of any of the other blocks.
 * The attribute name is required and gives a name to the element.
 */
export class Block extends AbstractNode {
  abbreviation = '';

  nodeName = 'block';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
