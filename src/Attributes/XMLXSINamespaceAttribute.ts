import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class XMLXSINamespaceAttribute extends AbstractAttribute {

  readonly name ='xmlns:xsi';

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
    return 'The xmlns:xsi attribute should not contain white spaces';
  }
}