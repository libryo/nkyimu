import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";
import { Remark } from "./Remark";

/**
 * The element tocItem is a component of the table of content
 * and contains header information about sections or parts of
 * the rest of the document
 */
export class TocItem extends AbstractNode {
  abbreviation = '';

  nodeName = 'tocItem';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
