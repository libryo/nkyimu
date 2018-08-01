import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BlockListType } from "../ComplexTypes/BlockListType";

/**
 * The element blockList is used as in a block context as a container
 * of many individual item elements to be treated as in a list.
 */
export class BlockList extends AbstractNode {
  abbreviation = 'bll';

  nodeName = 'blockList';

  readonly CHILDREN_MAP: NodeRules = (new BlockListType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
