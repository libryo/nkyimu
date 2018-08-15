import { AbstractNode } from "../../Abstract/AbstractNode";
import { Linkopt } from "../../AttributeGroups/Linkopt";
import { Quote } from "../../AttributeGroups/Quote";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { SubFlowStructure } from "../ComplexTypes/SubFlowStructure";

const type = new SubFlowStructure();

/**
 * The element embeddedStructure is a subFlow element containing
 * a full structure used as an extract from another document or
 * position. Attribute quote is used to specify the quote character
 * used in the original; no quote attribute implies that the quote
 * is left in the text; quote="" implies that there is no quote
 * character.
 */
export class EmbeddedStructure extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'embeddedStructure'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Quote()).items,
    ...(new Linkopt()).items,
  ];
}
