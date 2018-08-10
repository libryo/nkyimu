import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ListItems } from "../ComplexTypes/ListItems";

const type = new ListItems();

/**
 * The element ol is an HTML element and is used in Akoma Ntoso
 * as in HTML, for an ordered list of list item (elements li)
 */
export class Ol extends AbstractNode {
  abbreviation = '';

  nodeName = 'ol';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
