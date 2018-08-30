import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { OnlyNumbers } from "../SimpleTypes/OnlyNumbers";

export class BorderAttribute extends AbstractAttribute {

  static getClassName(): string { return 'BorderAttribute'; }

  get className(): string { return 'BorderAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'border';

  static getName() { return 'border'; }

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
    return (new OnlyNumbers()).validate(value, 'border');
  }
}
