import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class TitleAttribute extends AbstractAttribute {

  static getClassName(): string { return 'TitleAttribute'; }

  get className(): string { return 'TitleAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'title';

  static getName() { return 'title'; }

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