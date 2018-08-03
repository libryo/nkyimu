import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ListItems } from "../ComplexTypes/ListItems";

/**
 * The element ul is an HTML element and is used in Akoma Ntoso
 * as in HTML, for an unordered list of list item (elements li)
 */
export class Ul extends AbstractNode {
  abbreviation = '';

  nodeName = 'ul';

  readonly CHILDREN_MAP: NodeRules = (new ListItems()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
