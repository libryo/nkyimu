import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class ClassAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'class';

  /**
   * The default value of the attribute.
   */
  readonly defaultValue: string = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return true;
  }
}