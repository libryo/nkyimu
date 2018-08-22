import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Basicopt } from "../../ComplexTypes/Basicopt";

const type = new Basicopt();
/**
 * The element conclusion is used as a container of all concluding
 * material (e.g. dates, signatures, formulas, etc.)
 */
export class Conclusions extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'conclusions'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}