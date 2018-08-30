import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { NoWhiteSpace } from "../SimpleTypes/NoWhiteSpace";

export class WIdAttribute extends AbstractAttribute {

  static getClassName(): string { return 'WIdAttribute'; }

  get className(): string { return 'WIdAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'wId';

  static getName() { return 'wId'; }

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
    return (new NoWhiteSpace()).validate(value, 'wId');
  }
}