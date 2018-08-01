import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * the element docCommittee is an inline element within
 * preface to identify the string used by the document
 * detailing the committee within which the document
 * originated
 */
export class DocCommittee extends AbstractNode {
  abbreviation = '';

  nodeName = 'docCommittee';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
