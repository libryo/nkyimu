import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { FromLanguageAttribute } from "../Attributes/FromLanguageAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * This attribute specifies the human language of the expression this is a translation of.
 * Values are taken from the RFC 4646.
 */
export class FromLanguage extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: FromLanguageAttribute, required: true },
  ];
}