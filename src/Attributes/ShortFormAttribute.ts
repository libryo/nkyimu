import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class ShortFormAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'shortForm';

  static getName() { return 'shortForm'; }

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