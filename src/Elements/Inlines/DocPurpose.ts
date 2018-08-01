import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docPurpose is an inline element within preface
 * to identify the string used by the document detailing its
 * own purpose
 */
export class DocPurpose extends AbstractNode {
  abbreviation = '';

  nodeName = 'docPurpose';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
