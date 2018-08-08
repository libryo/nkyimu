import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { EndAttribute } from "../Attributes/EndAttribute";
import { StartAttribute } from "../Attributes/StartAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The start and end attributes are used to specify events that mark the beginning and
 * the end of a time interval. Both are references to eventRef elements in the lifecycle
 * element
 */
export class Interval extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: StartAttribute, required: false },
    { attribute: EndAttribute, required: false },
  ];
}
