import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class MarkerAttribute extends AbstractAttribute {

  static getClassName(): string { return 'MarkerAttribute'; }

  get className(): string { return 'MarkerAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'marker';

  static getName() { return 'marker'; }

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