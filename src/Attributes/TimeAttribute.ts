import { AbstractAttribute } from "../Abstract/AbstractAttribute";

/**
 * The attribute time is used to give a normalized value for a time according to the XSD
 * syntax HH:MM:SS
 */
export class TimeAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'time';

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
    const regExp = new RegExp(/^((([0-9]|0[0-9]|1[1-2]):[0-5][0-9]\s?(AM|PM))|(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]))$/, 'i');

    if (!regExp.test(value)) {
      throw new Error('The time attribute expects a valid time');
    }

    return true;
  }
}
