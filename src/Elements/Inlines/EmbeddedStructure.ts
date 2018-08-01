import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { SubFlowStructure } from "../ComplexTypes/SubFlowStructure";

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

  nodeName = 'embeddedStructure';

  readonly CHILDREN_MAP: NodeRules = (new SubFlowStructure()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
