import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { RecitalHierarchy } from "../../ComplexTypes/RecitalHierarchy";

const type = new RecitalHierarchy();
/**
 * The element recitals is the section of the preamble that contains recitals.
 */
export class Recitals extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'recitals'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
