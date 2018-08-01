import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BlockContainerType } from "../ComplexTypes/BlockContainerType";

/**
 * The element blockContainer is used as a container of many
 * individual block elements in a block context
 */
export class BlockContainer extends AbstractNode {
  abbreviation = 'blc';

  nodeName = 'blockContainer';

  readonly CHILDREN_MAP: NodeRules = (new BlockContainerType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
