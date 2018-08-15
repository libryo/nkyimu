import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Basicopt } from "../ComplexTypes/Basicopt";

const type = new Basicopt();

/**
 * The element coverPage is used as a container of the text
 * that acts as a cover page
 */
export class CoverPage extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'coverPage'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}