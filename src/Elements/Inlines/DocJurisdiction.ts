import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element docJurisdiction is an inline element within
 * preface to identify the string used by the document
 * detailing the jurisdiction of the document
 */
export class DocJurisdiction extends AbstractNode {
  abbreviation = '';

  nodeName = 'docJurisdiction';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
