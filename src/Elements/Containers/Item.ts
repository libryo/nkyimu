import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ItemType } from "../../ComplexTypes/ItemType";

const type = new ItemType();

/**
 * The element item is a container belonging to a blockList
 */
export class Item extends AbstractNode {
  abbreviation = 'item';

  getNodeName(): string { return 'item'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
