import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksopt } from "../ComplexTypes/Blocksopt";

const type = new Blocksopt();

/**
 * the element header is used as a container of all prefacing material of
 * judgments (e.g. headers, formulas, etc.)
 */
export class Header extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'header'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}