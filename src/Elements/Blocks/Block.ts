import { AbstractNode } from "../../Abstracts/AbstractNode";
import { Name } from "../../AttributeGroups/Name";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element block is a generic element for a block. It can
 * be placed in a container instead of any of the other blocks.
 * The attribute name is required and gives a name to the element.
 */
export class Block extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'block'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];
}
