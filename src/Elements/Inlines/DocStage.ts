import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docStage is an inline element within preface
 * to identify the string used by the document detailing
 * the stage in which the document sits
 */
export class DocStage extends AbstractNode {
  abbreviation = '';

  nodeName = 'docStage';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
