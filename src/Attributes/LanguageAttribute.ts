import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { Language } from "../SimpleTypes/Language";

/**
 * This attribute specifies the human language in which the document the element refers to is expressed.
 * Values are taken from the RFC 4646.
 */
export class LanguageAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'language';

  static getName() { return 'language'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = '';

  /**
   * Determines whether the attribute is required.
   */
  readonly required: boolean = true;

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new Language()).validate(value, 'language');
  }
}
