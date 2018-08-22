import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { Language } from "../SimpleTypes/Language";

export class XMLLangNamespaceAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'xmlns:lang';

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new Language()).validate(value, 'xmlns:lang');
  }
}