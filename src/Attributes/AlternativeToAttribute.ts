import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { EIdRef } from "../SimpleTypes/EIdRef";

/**
 * The attribute alternativeTo is used to specify, when the element contains an alternative
 * version of some content, the eId of the main element which this element is an alternative
 * copy of
 */
export class AlternativeToAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'alternativeTo';

  static getName() { return 'alternativeTo'; }

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
    return (new EIdRef()).validate(value, 'alternativeTo');
  }
}