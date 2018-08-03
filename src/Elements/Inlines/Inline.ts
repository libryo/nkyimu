import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline as InlineType } from "../ComplexTypes/Inline";

/**
 * The element inline is a generic element for an inline. It can
 * be placed inside a block instead of any of the other inlines.
 * The attribute name is required and gives a name to the element.
 */
export class Inline extends AbstractNode {
  abbreviation = '';

  nodeName = 'inline';

  readonly CHILDREN_MAP: NodeRules = (new InlineType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}