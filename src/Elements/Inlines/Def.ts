import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element def is an inline element used for the definition
 * of a term used in the rest of the document
 */
export class Def extends AbstractNode {
  abbreviation = '';

  nodeName = 'def';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
