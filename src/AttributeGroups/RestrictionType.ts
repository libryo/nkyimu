import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { TypeRestrictionTypeAttribute } from "../Attributes/TypeRestrictionTypeAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

export class RestrictionType extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TypeRestrictionTypeAttribute, required: true },
  ];
}
