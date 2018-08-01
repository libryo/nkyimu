import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element docDate is an inline element within preface to
 * identify the string used by the document for its own
 * date(s). Documents with multiple dates may use multiple
 * docDate elements.
 */
export class DocDate extends AbstractNode {
  abbreviation = '';

  nodeName = 'docDate';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
