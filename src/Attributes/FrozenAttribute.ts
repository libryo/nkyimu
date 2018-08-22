import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class FrozenAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'frozen';

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
  validate(value: boolean): boolean {
    return true;
  }
}