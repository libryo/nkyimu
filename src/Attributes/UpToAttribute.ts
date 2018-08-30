import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { EIdRef } from "../SimpleTypes/EIdRef";

/**
 * The attribute upTo is used in range-based elements to specify the eId of the
 * ending element of the range.
 */
export class UpToAttribute extends AbstractAttribute {

  static getClassName(): string { return 'UpToAttribute'; }

  get className(): string { return 'UpToAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'upTo';

  static getName() { return 'upTo'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = '';

  /**
   * Determines whether the attribute is required.
   */
  readonly required: boolean = true;

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new EIdRef()).validate(value, 'upTo');
  }
}
