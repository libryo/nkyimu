import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docTitle is an inline element within preface
 * to identify the string used by the document for its own
 * title
 */
export class DocTitle extends AbstractNode {
  abbreviation = '';

  nodeName = 'docTitle';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
