import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class DateAttribute extends AbstractAttribute {

  readonly name ='date';

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    return true;
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The date attribute expects a valid date';
  }
}