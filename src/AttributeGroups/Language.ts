import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { LanguageAttribute } from "../Attributes/LanguageAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * This attribute specifies the human language in which the document the element
 * refers to is expressed. Values are taken from the RFC 4646.
 */
export class Language extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: LanguageAttribute, required: true },
  ];
}