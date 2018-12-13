import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { Language } from '../SimpleTypes/Language';

/**
 * This attribute specifies the human language used as a pivot in
 * the translation. Values are taken from the RFC 4646.
 */
export class PivotAttribute extends AbstractAttribute {

  static getClassName(): string { return 'PivotAttribute'; }

  get className(): string { return 'PivotAttribute'; }

  static getName() { return 'pivot'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'pivot';


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
  public validate(value: string): boolean {
    return (new Language()).validate(value, 'language');
  }
}
