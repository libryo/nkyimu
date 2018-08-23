import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { TimeType } from "../SimpleTypes/TimeType";

export class TypeTimeTypeAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'type';

  static getName() { return 'type__time'; }

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
  validate(value: string): boolean {
    return (new TimeType()).validate(value, 'type');
  }
}
