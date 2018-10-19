import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Preambleopt } from "../../ComplexTypes/Preambleopt";

const type = new Preambleopt();

/**
 * The element preamble is used as a container of the text that opens
 * the main body of the document as a preamble
 */
export class Preamble extends AbstractNode {
  abbreviation = 'preamble';

  getNodeName(): string { return 'preamble'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}