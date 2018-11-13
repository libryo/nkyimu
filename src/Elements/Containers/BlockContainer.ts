import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BlockContainerType } from "../../ComplexTypes/BlockContainerType";

const type = new BlockContainerType();

/**
 * The element blockContainer is used as a container of many
 * individual block elements in a block context
 */
export class BlockContainer extends AbstractNode {
  abbreviation = 'blockcontainer';

  getNodeName(): string { return 'blockContainer'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
