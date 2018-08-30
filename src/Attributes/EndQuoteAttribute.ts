import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class EndQuoteAttribute extends AbstractAttribute {

  static getClassName(): string { return 'EndQuoteAttribute'; }

  get className(): string { return 'EndQuoteAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'endQuote';

  static getName() { return 'endQuote'; }

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