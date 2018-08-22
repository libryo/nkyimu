import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { EIdRef } from "../SimpleTypes/EIdRef";

/**
 * The attribute for is used in modification elements to specify the element this is a modification of.
 */
export class ForTypeEIdRefAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'for';

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
    return (new EIdRef()).validate(value, 'for');
  }
}
