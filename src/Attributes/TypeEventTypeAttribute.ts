import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { EventType } from "../SimpleTypes/EventType";

export class TypeEventTypeAttribute extends AbstractAttribute {

  static getClassName(): string { return 'TypeEventTypeAttribute'; }

  get className(): string { return 'TypeEventTypeAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'type';

  static getName() { return 'type__event'; }

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
    return (new EventType()).validate(value, 'type');
  }
}
