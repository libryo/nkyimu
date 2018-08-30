import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class ClassAttribute extends AbstractAttribute {

  static getClassName(): string { return 'ClassAttribute'; }

  get className(): string { return 'ClassAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'class';

  static getName() { return 'class'; }

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