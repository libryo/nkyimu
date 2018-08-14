import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";
import { langs } from "../languageCodes";

/**
 * This attribute specifies the human language in which the document the element
 * refers to is expressed. Values are taken from the RFC 4646.
 */
export class Language extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = new RegExp(`^(${langs.join('|')})$`);

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'language accepts only valid RFC 4646 languages';
}

