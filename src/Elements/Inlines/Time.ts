import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Time as TimeGroup } from '../../AttributeGroups/Time';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * the element time is an inline element to identify a time
 * expressed in the text and to propose a normalized
 * representation in the time attribute.
 */
export class Time extends AbstractNode {
  public abbreviation = 'time';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new TimeGroup()).items,
  ];

  public getNodeName(): string {
    return 'time';
  }
}
