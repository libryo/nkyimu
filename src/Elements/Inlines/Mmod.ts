import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ModType } from "../../ComplexTypes/ModType";

const type = new ModType();

/**
 * The element mmod is an inline element containing multiple
 * specifications of modifications on another document
 */
export class Mmod extends AbstractNode {
  abbreviation = 'mmod';

  getNodeName(): string { return 'mmod'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
