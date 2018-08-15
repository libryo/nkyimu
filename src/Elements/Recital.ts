import { AbstractNode } from "../Abstract/AbstractNode";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { NodeRules } from "../Interfaces/NodeRules";
import { ItemType } from "./ComplexTypes/ItemType";

const type = new ItemType();

/**
 * The element recital is the individual element of the preface
 * that is called recital
 */
export class Recital extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'recital'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}