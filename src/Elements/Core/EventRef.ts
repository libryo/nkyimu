import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Source } from '../../AttributeGroups/Source';
import { AnyOtherType } from '../../ComplexTypes';
import { Date as DateGroup, Refers, EventType, Originating } from '../../AttributeGroups';

const type = new AnyOtherType();

/**
 * The element eventRef is a metadata element specifying facts about an event that
 * had an effect on the document. For each event, a date, a type and a document
 * that generated the event must be referenced.
 */
export class EventRef extends AbstractNode {
  abbreviation = 'eventref';

  getNodeName(): string {
    return 'eventRef';
  }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new DateGroup()).items,
    ...(new Source()).items,
    ...(new Refers()).items,
    ...(new EventType()).items,
    ...(new Originating()).items,
  ];
}
