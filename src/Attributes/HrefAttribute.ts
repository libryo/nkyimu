import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

/**
 * The attribute href is used to specify an internal or external destination
 * for a reference, a citation, an access to the ontology or a hypertext link.
 * In elements using this attribute definition the href attribute is required
 */
export class HrefAttribute extends AbstractAttribute {

  static getClassName(): string { return 'HrefAttribute'; }

  get className(): string { return 'HrefAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'href';

  static getName() { return 'href'; }

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
    return true;
  }
}
