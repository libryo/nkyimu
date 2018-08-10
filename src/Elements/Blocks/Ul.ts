import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ListItems } from "../ComplexTypes/ListItems";


const type = new ListItems();

/**
 * The element ul is an HTML element and is used in Akoma Ntoso
 * as in HTML, for an unordered list of list item (elements li)
 */
export class Ul extends AbstractNode {
  abbreviation = '';

  nodeName = 'ul';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
