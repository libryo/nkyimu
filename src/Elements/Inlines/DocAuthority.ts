import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docAuthority is an inline element within preface
 * to identify the string used by the document detailing the
 * Authority to which the document was submitted.
 */
export class DocAuthority extends AbstractNode {
  abbreviation = '';

  nodeName = 'docAuthority';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
