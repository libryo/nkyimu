import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Hierarchy } from '../../ComplexTypes/Hierarchy';

const type = new Hierarchy();

/**
 * this element is a hierarchical container called
 * "list" either explicitly or due to the local tradition
 */
export class List extends AbstractNode {
  public abbreviation = 'list';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'list';
  }
}
