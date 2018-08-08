import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { NoWhiteSpace } from "../SimpleTypes/NoWhiteSpace";

export class GUIDAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'GUID';

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
    return (new NoWhiteSpace()).validate(value, 'GUID');
  }
}