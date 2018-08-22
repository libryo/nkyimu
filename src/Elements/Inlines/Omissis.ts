import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * the element omissis is an inline element for the specification
 * of a text that substitutes a textual omission
 * (e.g., dots, spaces, the word "omissis", etc.
 */
export class Omissis extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'omissis'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
