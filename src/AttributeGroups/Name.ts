import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { NameAttribute } from "../Attributes/NameAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute name is used to give a name to all generic elements.
 */
export class Name extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: NameAttribute, required: true },
  ];
}