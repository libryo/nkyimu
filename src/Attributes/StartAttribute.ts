import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { EventRefRef } from "../SimpleTypes/EventRefRef";

export class StartAttribute extends AbstractAttribute {

  static getClassName(): string { return 'StartAttribute'; }

  get className(): string { return 'StartAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'start';

  static getName() { return 'start'; }

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
    return (new EventRefRef()).validate(value, 'start');
  }
}