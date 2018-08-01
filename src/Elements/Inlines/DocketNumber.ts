import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docketNumber is an inline element within preface
 * to identify the string used by the document for the number
 * of the docket, case, file, etc which the document belongs to
 */
export class DocketNumber extends AbstractNode {
  abbreviation = '';

  nodeName = 'docketNumber';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
