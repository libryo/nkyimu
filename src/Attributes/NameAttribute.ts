import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

/**
 * The attribute name is used to give a name to all generic elements
 */
export class NameAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'name';

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
