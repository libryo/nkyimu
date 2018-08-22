import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { ValueAttribute } from "../Attributes/ValueAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute value is used to specify a value for metadata elements. In elements
 * using this attribute definition the value attribute is optional
 */
export class Optvalue extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: ValueAttribute, required: false },
  ];
}