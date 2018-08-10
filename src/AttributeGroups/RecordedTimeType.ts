import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { TypeTimeTypeAttribute } from "../Attributes/TypeTimeTypeAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

export class RecordedTimeType extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TypeTimeTypeAttribute, required: false },
  ];
}