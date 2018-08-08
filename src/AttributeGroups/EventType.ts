import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { TypeEventTypeAttribute } from "../Attributes/TypeEventTypeAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

export class EventType extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TypeEventTypeAttribute, required: false },
  ];
}