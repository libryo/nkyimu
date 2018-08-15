import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { DocContainerType } from "../ComplexTypes/DocContainerType";

const type = new DocContainerType();

/**
 * The element attachment is used as a container of individual
 * attachment elements
 */
export class Attachment extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'attachment'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}