import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class PosTypeAttribute extends AbstractAttribute {

  readonly name ='posType';

  private static OPTIONS: string[] = [
    'start',
    'before',
    'inside',
    'after',
    'end',
    'unspecified',
  ];

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    return PosTypeAttribute.OPTIONS.indexOf(value) !== -1;
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The posType attribute can only have a value of start, before, inside, after, end or unspecified';
  }
}
