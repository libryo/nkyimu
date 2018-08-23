import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

/**
 * The attribute value is used to specify a value for metadata elements.
 * In elements using this attribute definition the value attribute is required
 */
export class ValueAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'value';

  static getName() { return 'value'; }

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
