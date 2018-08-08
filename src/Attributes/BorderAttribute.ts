import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { OnlyNumbers } from "../SimpleTypes/OnlyNumbers";

export class BorderAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'border';

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
