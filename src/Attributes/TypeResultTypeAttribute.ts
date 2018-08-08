import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { ResultType } from "../SimpleTypes/ResultType";

export class TypeResultTypeAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'type';

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
    return (new ResultType()).validate(value, 'type');
  }
}
