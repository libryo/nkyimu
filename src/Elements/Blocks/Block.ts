import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Name } from '../../AttributeGroups/Name';
import { Inline } from '../../ComplexTypes/Inline';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

const type = new Inline();

/**
 * The element block is a generic element for a block. It can
 * be placed in a container instead of any of the other blocks.
 * The attribute name is required and gives a name to the element.
 */
export class Block extends AbstractNode {
  public abbreviation = 'block';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];

  public getNodeName(): string {
    return 'block';
  }
}
