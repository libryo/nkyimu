import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element listWrapUp is an optional element of blockList
 * after all items of the list itself.
 */
export class ListWrapUp extends AbstractNode {
  abbreviation = '';

  nodeName = 'listWrapUp';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
