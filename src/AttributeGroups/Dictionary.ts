import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { DictionaryAttribute } from "../Attributes/DictionaryAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * This attribute specifies the eId of the element in the references section detailing
 * the dictionary used for the keyword.
 */
export class Dictionary extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: DictionaryAttribute, required: true },
  ];
}