import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

/**
 * The attribute normalized is used in the inline element quantity to provide a
 * normalized value of the number, if appropriate.
 */
export class NormalizedAttribute extends AbstractAttribute {

  static getClassName(): string { return 'NormalizedAttribute'; }

  get className(): string { return 'NormalizedAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'normalized';

  static getName() { return 'normalized'; }

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
    return true;
  }
}
