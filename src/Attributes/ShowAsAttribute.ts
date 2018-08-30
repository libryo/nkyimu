import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class ShowAsAttribute extends AbstractAttribute {

  static getClassName(): string { return 'ShowAsAttribute'; }

  get className(): string { return 'ShowAsAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'showAs';

  static getName() { return 'showAs'; }

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
    return true;
  }
}