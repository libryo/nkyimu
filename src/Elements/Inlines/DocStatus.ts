import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docStatus is an inline element within preface
 * to identify the string used by the document detailing the
 * status of the document
 */
export class DocStatus extends AbstractNode {
  abbreviation = '';

  nodeName = 'docStatus';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
