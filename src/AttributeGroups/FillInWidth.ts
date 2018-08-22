import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { WidthAttribute } from "../Attributes/WidthAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * the attribute width of the element fillIn specifies the width of the fillIn element.
 */
export class FillInWidth extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: WidthAttribute, required: false },
  ];
}
