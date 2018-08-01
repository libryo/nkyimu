import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docNumber is an inline element within preface
 * to identify the string used by the document for its own number
 */
export class DocNumber extends AbstractNode {
  abbreviation = '';

  nodeName = 'docNumber';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
