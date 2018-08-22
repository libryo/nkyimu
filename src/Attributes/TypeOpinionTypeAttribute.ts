import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { OpinionType } from "../SimpleTypes/OpinionType";

export class TypeOpinionTypeAttribute extends AbstractAttribute {
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
    return (new OpinionType()).validate(value, 'type');
  }
}
