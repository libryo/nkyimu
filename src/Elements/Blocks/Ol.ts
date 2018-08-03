import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ListItems } from "../ComplexTypes/ListItems";

/**
 * The element ol is an HTML element and is used in Akoma Ntoso
 * as in HTML, for an ordered list of list item (elements li)
 */
export class Ol extends AbstractNode {
  abbreviation = '';

  nodeName = 'ol';

  readonly CHILDREN_MAP: NodeRules = (new ListItems()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
