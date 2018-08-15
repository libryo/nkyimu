import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksreq } from "../ComplexTypes/Blocksreq";

const type = new Blocksreq();

/**
 * The element wrapUp is a concluding element in a hierarchy that
 * contains paragraphs wrapping up the preceding lower hierarchical
 * elements.
 */
export class WrapUp extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'wrapUp'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
