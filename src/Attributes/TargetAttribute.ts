import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

/**
 * The attribute target specifies the target of the a element.
 */
export class TargetAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'target';

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
