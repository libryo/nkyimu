import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { OriginalTextAttribute } from "../Attributes/OriginalTextAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute originalText contains the original text of a placeholder
 */
export class OriginalText extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: OriginalTextAttribute, required: false },
  ];
}