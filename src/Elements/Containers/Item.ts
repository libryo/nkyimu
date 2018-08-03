import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ItemType } from "../ComplexTypes/ItemType";

/**
 * The element item is a container belonging to a blockList
 */
export class Item extends AbstractNode {
  abbreviation = '';

  nodeName = 'item';

  readonly CHILDREN_MAP: NodeRules = (new ItemType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
