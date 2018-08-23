import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class StartQuoteAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'startQuote';

  static getName() { return 'startQuote'; }

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