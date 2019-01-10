import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { BlockListType } from '../../ComplexTypes/BlockListType';

const type = new BlockListType();

/**
 * The element blockList is used as in a block context as a container
 * of many individual item elements to be treated as in a list.
 */
export class BlockList extends AbstractNode {
  public abbreviation = 'list';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'blockList';
  }
}
