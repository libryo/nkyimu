import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { EventRefRef } from "../SimpleTypes/EventRefRef";

export class EndAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'end';

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
    return (new EventRefRef()).validate(value, 'end');
  }
}