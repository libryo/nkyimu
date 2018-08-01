import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element placeholder is an inline element containing the text of a
 * computable expression (e.g., '30 days after the publication of this act')
 * that can be replaced editorially with an actual value
 */
export class Placeholder extends AbstractNode {
  abbreviation = '';

  nodeName = 'placeholder';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
