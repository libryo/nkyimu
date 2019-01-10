import { Corereq } from "../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The complex type listItems specifies the content model of elements
 * ul and ol, and specifies just a sequence of list items (elements li).
 */
export class ListItems implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    li: { minOccur: 1, options: {} }
  };

  public readonly SEQUENCE: string[] = [
    'li'
  ];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
  ];
}