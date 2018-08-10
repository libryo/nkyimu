import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { OnlyNumbers } from "../SimpleTypes/OnlyNumbers";

/**
 * The attribute number is used to specify a number in the publication of the document
 */
export class BreakAtAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'breakAt';

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
    return (new OnlyNumbers()).validate(value, 'breakAt');
  }
}
