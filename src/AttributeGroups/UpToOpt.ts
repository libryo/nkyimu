import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { UpToAttribute } from "../Attributes/UpToAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute upTo is used in range-based elements to specify the eId of the ending
 * element of the range.
 */
export class UpToOpt extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: UpToAttribute, required: false },
  ];
}
