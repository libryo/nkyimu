import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { OriginatingExpressionAttribute } from "../Attributes/OriginatingExpressionAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute originating is used to identify whether the event is the one originating this expression
 */
export class Originating extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: OriginatingExpressionAttribute, required: true },
  ];
}