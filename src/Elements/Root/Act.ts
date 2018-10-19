import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HierarchicalStructure } from "../../ComplexTypes/HierarchicalStructure";

const type = new HierarchicalStructure();

/**
 * Element act is used for describing the structure and content of an act
 */
export class Act extends AbstractNode {
  abbreviation = 'act';

  getNodeName(): string { return 'act'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = type.SEQUENCE;

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
