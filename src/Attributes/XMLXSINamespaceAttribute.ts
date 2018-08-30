import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class XMLXSINamespaceAttribute extends AbstractAttribute {

  static getClassName(): string { return 'XMLXSINamespaceAttribute'; }

  get className(): string { return 'XMLXSINamespaceAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'xmlns:xsi';

  static getName() { return 'xmlns:xsi'; }

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