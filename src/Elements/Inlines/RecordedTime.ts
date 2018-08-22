import { AbstractNode } from "../../Abstracts/AbstractNode";
import { RecordedTimeType } from "../../AttributeGroups/RecordedTimeType";
import { Time } from "../../AttributeGroups/Time";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element recordedTime is an inline element for the
 * specification of an explicit mention of a time
 * (e.g., in a debate)
 */
export class RecordedTime extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'recordedTime'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new RecordedTimeType()).items,
    ...(new Time()).items,
  ];
}
