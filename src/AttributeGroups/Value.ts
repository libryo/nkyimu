import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { ValueAttribute } from "../Attributes/ValueAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute value is used to specify a value for metadata elements. In elements
 * using this attribute definition the value attribute is required
 */
export class Value extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: ValueAttribute, required: true },
  ];
}