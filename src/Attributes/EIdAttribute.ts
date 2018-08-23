import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { NoWhiteSpace } from "../SimpleTypes/NoWhiteSpace";

export class EIdAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'eId';

  static getName() { return 'eId'; }

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
    return (new NoWhiteSpace()).validate(value, 'eId');
  }
}