import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { NumberAttribute } from "../Attributes/NumberAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute number is used to specify a number in the publication of the document.
 */
export class Number extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: NumberAttribute, required: true },
  ];
}