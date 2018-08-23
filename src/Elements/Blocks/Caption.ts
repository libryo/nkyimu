import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes";

const type = new Inline();

/**
 * The element caption is an HTML element and is used in Akoma Ntoso as in HTML,
 * for the caption of a table (a block)
 */
export class Caption extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'caption'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
