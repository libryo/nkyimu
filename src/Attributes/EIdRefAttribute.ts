import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class EIdRefAttribute extends AbstractAttribute {

  readonly name ='eIdRef';

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  validate(value: string): boolean {
    const regExp = new RegExp(/\s/, 'gi');

    return !regExp.test(value);
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The eIdRef attribute should not contain white spaces';
  }
}