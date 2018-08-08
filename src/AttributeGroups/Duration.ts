import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { DurationAttribute } from "../Attributes/DurationAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The duration attribute is used to specify a duration when either the start or the
 * end event of a time interval is not known.
 */
export class Duration extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: DurationAttribute, required: false },
  ];
}