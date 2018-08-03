import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element listIntroduction is an optional element of blockList
 * before any item of the list itself.
 */
export class ListIntroduction extends AbstractNode {
  abbreviation = '';

  nodeName = 'listIntroduction';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
