import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { RoleRef } from "../SimpleTypes/RoleRef";

/**
 * The attribute role is used to identify the role of an individual mentioned in
 * the text. It is a reference to a TLCRole element in the references section
 */
export class AsAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'as';

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
    return (new RoleRef()).validate(value, 'as');
  }
}
