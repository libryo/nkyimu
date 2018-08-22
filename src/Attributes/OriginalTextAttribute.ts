import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

/**
 * the attribute originalText contains the original text of a placeholder
 */
export class OriginalTextAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'originalText';

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
