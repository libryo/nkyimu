import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Prefaceopt } from "../ComplexTypes/Prefaceopt";

const type = new Prefaceopt();
/**
 * The element preface is used as a container of all prefacing
 * material (e.g. headers, formulas, etc.)
 */
export class Preface extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'preface'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}