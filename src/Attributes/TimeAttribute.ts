import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class TimeAttribute extends AbstractAttribute {

  readonly name ='time';

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    const regExp = new RegExp(/^((([0-9]|0[0-9]|1[1-2]):[0-5][0-9]\s?(AM|PM))|(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]))$/, 'i');

    return regExp.test(value);
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The time attribute expects a valid time';
  }
}
