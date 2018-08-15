import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereq } from "../ComplexTypes/Inlinereq";

const type = new Inlinereq();

/**
 * The element subheading is a heading element in a hierarchy that
 * contains a subtitle or any other textual content to further
 * describe the structure.
 */
export class Subheading extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'subheading'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
