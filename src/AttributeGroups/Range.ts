import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { FromAttribute } from "../Attributes/FromAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { UpTo } from "./UpTo";

/**
 * These attributes are used in range-based elements to specify the eId of the beginning and ending
 * element of the range.
 */
export class Range extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: FromAttribute, required: true },
    ...(new UpTo()).items,
  ];
}