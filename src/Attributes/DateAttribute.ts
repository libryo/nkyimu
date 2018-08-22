import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

/**
 * The attribute date is used to give a normalized value for a date according
 * to the XSD syntax YYYY-MM-DD or a normalized value for a dateTime according
 * to the XSD syntax YYYY-MM-DDThh:mm:ss(zzzz)
 */
export class DateAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'date';

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