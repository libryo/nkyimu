import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { AnyOtherType } from "../../ComplexTypes/AnyOtherType";

const type = new AnyOtherType();

/**
 * the element foreign is a generic container for elements not belonging
 * to the Akoma Ntoso namespace (e.g., mathematical formulas). It is a
 * block element and thus can be placed in a container.
 */
export class Foreign extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'foreign'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
