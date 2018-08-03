import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksreq } from "../ComplexTypes/Blocksreq";

/**
 * The element wrapUp is a concluding element in a hierarchy that
 * contains paragraphs wrapping up the preceding lower hierarchical
 * elements.
 */
export class WrapUp extends AbstractNode {
  abbreviation = '';

  nodeName = 'wrapUp';

  readonly CHILDREN_MAP: NodeRules = (new Blocksreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
