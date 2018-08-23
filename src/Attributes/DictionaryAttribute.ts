import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { ReferenceRef } from "../SimpleTypes/ReferenceRef";

/**
 * This attribute specifies the eId of the element in the references section detailing
 * the dictionary used for the keyword.
 */
export class DictionaryAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'dictionary';

  static getName() { return 'dictionary'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue: string = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new ReferenceRef()).validate(value, 'dictionary');
  }
}