import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element shortTitle is an inline element within preface
 * to identify the string used by the document for the short
 * title of the document.
 */
export class ShortTitle extends AbstractNode {
  abbreviation = '';

  nodeName = 'shortTitle';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
