import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docIntroducer is an inline element within
 * preface to identify the string used by the document
 * detailing the individual introducing of the document.
 */
export class DocIntroducer extends AbstractNode {
  abbreviation = '';

  nodeName = 'docIntroducer';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
