import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { NoWhiteSpace } from "../SimpleTypes/NoWhiteSpace";

export class GUIDAttribute extends AbstractAttribute {

  static getClassName(): string { return 'GUIDAttribute'; }

  get className(): string { return 'GUIDAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'GUID';

  static getName() { return 'GUID'; }

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