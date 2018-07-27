import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class RestrictionTypeAttribute extends AbstractAttribute {

  readonly name ='restrictionType';

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    return value === 'jurisdiction';
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The restrictionType attribute can only have a value of jurisdiction';
  }
}