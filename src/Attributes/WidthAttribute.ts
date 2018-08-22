import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class WidthAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'width';

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: number): boolean {
    return true;
  }
}
