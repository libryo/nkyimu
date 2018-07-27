import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class TimeTypeAttribute extends AbstractAttribute {

  readonly name ='timeType';

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    return ['startEvent', 'endEvent'].indexOf(value) !== -1;
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The timeType attribute should have a value of either be startEvent or endEvent';
  }
}