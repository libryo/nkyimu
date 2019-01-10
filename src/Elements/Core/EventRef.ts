import { AbstractNode } from '../../Abstracts/AbstractNode';
import {
  Date as DateGroup, EventType, Originating, Refers, Source,
} from '../../AttributeGroups';
import { AnyOtherType } from '../../ComplexTypes';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

const type = new AnyOtherType();

/**
 * The element eventRef is a metadata element specifying facts about an event that
 * had an effect on the document. For each event, a date, a type and a document
 * that generated the event must be referenced.
 */
export class EventRef extends AbstractNode {
  public abbreviation = 'eref';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new DateGroup()).items,
    ...(new Source()).items,
    ...(new Refers()).items,
    ...(new EventType()).items,
    ...(new Originating()).items,
  ];

  public getNodeName(): string {
    return 'eventRef';
  }
}
