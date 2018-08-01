import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksreq } from "../ComplexTypes/Blocksreq";

/**
 * The element longTitle is the section of the preface
 * or coverPage that is called long title.
 */
export class LongTitle extends AbstractNode {
  abbreviation = 'lt';

  nodeName = 'longTitle';

  readonly CHILDREN_MAP: NodeRules = (new Blocksreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}