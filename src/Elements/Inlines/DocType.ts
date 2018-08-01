import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element docType is an inline element within preface
 * to identify the string used by the document for its own
 * type
 */
export class DocType extends AbstractNode {
  abbreviation = '';

  nodeName = 'docType';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
