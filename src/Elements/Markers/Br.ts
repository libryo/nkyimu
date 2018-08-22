import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Markeropt } from "../../ComplexTypes/Markeropt";

const type = new Markeropt();

/**
 * The element br is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the breaking of a line.
 */
export class Br extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'br'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
