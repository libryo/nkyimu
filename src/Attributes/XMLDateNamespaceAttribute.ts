import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class XMLDateNamespaceAttribute extends AbstractAttribute {

  readonly name ='xmlns:date';

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    const regExp = new RegExp(/\s/, 'gi');

    return !regExp.test(value);
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The xmlns:date attribute should not contain white spaces';
  }
}