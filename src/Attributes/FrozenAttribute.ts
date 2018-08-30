import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class FrozenAttribute extends AbstractAttribute {

  static getClassName(): string { return 'FrozenAttribute'; }

  get className(): string { return 'FrozenAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'frozen';

  static getName() { return 'frozen'; }

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
  validate(value: boolean): boolean {
    return true;
  }
}