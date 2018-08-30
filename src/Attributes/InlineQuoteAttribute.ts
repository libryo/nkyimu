import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class InlineQuoteAttribute extends AbstractAttribute {

  static getClassName(): string { return 'InlineQuoteAttribute'; }

  get className(): string { return 'InlineQuoteAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'inlineQuote';

  static getName() { return 'inlineQuote'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue: string = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return true;
  }
}