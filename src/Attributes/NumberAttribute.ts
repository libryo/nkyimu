import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { OnlyNumbers } from "../SimpleTypes/OnlyNumbers";

/**
 * The attribute number is used to specify a number in the publication of the document
 */
export class NumberAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'number';

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
    return (new OnlyNumbers()).validate(value, 'number');
  }
}
