import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksopt } from "../ComplexTypes/Blocksopt";

/**
 * the element header is used as a container of all prefacing material of
 * judgments (e.g. headers, formulas, etc.)
 */
export class Header extends AbstractNode {
  abbreviation = '';

  nodeName = 'header';

  readonly CHILDREN_MAP: NodeRules = (new Blocksopt()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}