import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereq } from "../../ComplexTypes/Inlinereq";

const type = new Inlinereq();

/**
 * The element heading is a heading element in a hierarchy that
 * contains a title or any other textual content to describe
 * the structure.
 */
export class Heading extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'heading'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
