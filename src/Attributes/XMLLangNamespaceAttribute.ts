import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { Language } from "../SimpleTypes/Language";

export class XMLLangNamespaceAttribute extends AbstractAttribute {

  static getClassName(): string { return 'XMLLangNamespaceAttribute'; }

  get className(): string { return 'XMLLangNamespaceAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'xmlns:lang';

  static getName() { return 'xmlns:lang'; }

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