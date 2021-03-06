import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { ReferenceRef } from "../SimpleTypes/ReferenceRef";

export class RefersToAttribute extends AbstractAttribute {

  static getClassName(): string { return 'RefersToAttribute'; }

  get className(): string { return 'RefersToAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'refersTo';

  static getName() { return 'refersTo'; }

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
    return (new ReferenceRef()).validate(value, 'refersTo');
  }
}