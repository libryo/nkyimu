import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { PivotAttribute } from "../Attributes";

/**
 * This attribute specifies the human language used as a pivot in the translation.
 * Values are taken from the RFC 4646.
 */
export class Pivot extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: PivotAttribute, required: false },
  ];
}