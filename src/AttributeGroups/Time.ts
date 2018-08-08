import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { TimeAttribute } from "../Attributes/TimeAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute time is used to give a normalized value for a time according to
 * the XSD syntax HH:MM:SS
 */
export class Time extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TimeAttribute, required: true },
  ];
}