import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Range } from '../../AttributeGroups/Range';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ModType } from '../../ComplexTypes/ModType';

const type = new ModType();

/**
 * The element rmod is an inline element containing the
 * specification of a range of modifications on another document.
 */
export class Rmod extends AbstractNode {
  public abbreviation = 'rmod';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Range()).items,
  ];

  public getNodeName(): string {
    return 'rmod';
  }
}
