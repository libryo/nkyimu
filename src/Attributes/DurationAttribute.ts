import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

/**
 * The duration attribute is used to specify a duration when either the start
 * or the end event of a time interval is not known.
 */
export class DurationAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'duration';

  static getName() { return 'duration'; }

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