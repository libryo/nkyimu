import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class StatusTypeAttribute extends AbstractAttribute {

  readonly name ='statusType';

  private static OPTIONS: string[] = [
    'removed',
    'temporarilyRemoved',
    'translated',
    'editorial',
    'edited',
    'verbatim',
    'incomplete',
    'unknown',
    'undefined',
    'ignored',
  ];

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    return StatusTypeAttribute.OPTIONS.indexOf(value) !== -1;
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The statusType attribute can only have a value of removed, temporarilyRemoved, translated, editorial, edited, verbatim, incomplete, unknown, undefined or ignored';
  }
}