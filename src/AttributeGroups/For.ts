import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { ForTypeEIdRefAttribute } from "../Attributes/ForTypeEIdRefAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute for is used in modification elements to specify the element this is a modification of.
 */
export class For extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: ForTypeEIdRefAttribute, required: false },
  ];
}
