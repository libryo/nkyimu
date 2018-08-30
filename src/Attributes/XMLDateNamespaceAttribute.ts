import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class XMLDateNamespaceAttribute extends AbstractAttribute {

  static getClassName(): string { return 'XMLDateNamespaceAttribute'; }

  get className(): string { return 'XMLDateNamespaceAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'xmlns:date';

  static getName() { return 'xmlns:date'; }

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