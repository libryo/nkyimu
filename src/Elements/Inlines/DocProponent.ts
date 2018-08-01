import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docProponent is an inline element within preface
 * to identify the string used by the document for its proponent
 */
export class DocProponent extends AbstractNode {
  abbreviation = '';

  nodeName = 'docProponent';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
