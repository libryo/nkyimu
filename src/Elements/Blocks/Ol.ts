import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ListItems } from '../../ComplexTypes/ListItems';

const type = new ListItems();

/**
 * The element ol is an HTML element and is used in Akoma Ntoso
 * as in HTML, for an ordered list of list item (elements li)
 */
export class Ol extends AbstractNode {
  public abbreviation = 'ol';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'ol';
  }
}
