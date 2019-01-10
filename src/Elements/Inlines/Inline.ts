import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Name } from '../../AttributeGroups/Name';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline as InlineType } from '../../ComplexTypes/Inline';

const type = new InlineType();

/**
 * The element inline is a generic element for an inline. It can
 * be placed inside a block instead of any of the other inlines.
 * The attribute name is required and gives a name to the element.
 */
export class Inline extends AbstractNode {
  public abbreviation = 'inline';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];

  public getNodeName(): string {
    return 'inline';
  }
}
