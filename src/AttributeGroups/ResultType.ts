import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { TypeResultTypeAttribute } from "../Attributes/TypeResultTypeAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attributes are used in range-based elements to specify the eId of the beginning and ending
 * element of the range.
 */
export class ResultType extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TypeResultTypeAttribute, required: true },
  ];
}