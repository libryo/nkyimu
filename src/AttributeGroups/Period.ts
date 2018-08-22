import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { PeriodAttribute } from "../Attributes/PeriodAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The period attribute is used in versioned content and metadata elements to indicate
 * a time interval in which they were in force, in efficacy, or in any other type of
 * interval as specified in the corresponding temporalGroup.
 */
export class Period extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: PeriodAttribute, required: false },
  ];
}