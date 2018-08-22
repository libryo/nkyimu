import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { FrozenAttribute } from "../Attributes/FrozenAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute frozen for the condition element specifies whether the condition
 * is frozen or not in the time period of this expression.
 */
export class Frozen extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: FrozenAttribute, required: false },
  ];
}