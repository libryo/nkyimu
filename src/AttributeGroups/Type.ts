import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { TypeAttribute } from "../Attributes/TypeAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The type attribute is used in various element to identify a type without restrictions
 * as to its values.
 */
export class Type extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TypeAttribute, required: true },
  ];
}