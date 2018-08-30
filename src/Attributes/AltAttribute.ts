import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class AltAttribute extends AbstractAttribute {

  static getClassName(): string { return 'AltAttribute'; }

  get className(): string { return 'AltAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'alt';

  static getName() { return 'alt'; }

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