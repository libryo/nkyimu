import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereq } from "../../ComplexTypes/Inlinereq";

const type = new Inlinereq();

/**
 * The element crossHeading is a heading element that is placed side
 * by side with hierarchical containers.
 */
export class CrossHeading extends AbstractNode {
  abbreviation = 'crossheading';

  getNodeName(): string { return 'crossHeading'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
