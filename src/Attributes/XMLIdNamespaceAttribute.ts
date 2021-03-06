import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class XMLIdNamespaceAttribute extends AbstractAttribute {

  static getClassName(): string { return 'XMLIdNamespaceAttribute'; }

  get className(): string { return 'XMLIdNamespaceAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'xmlns:id';

  static getName() { return 'xmlns:id'; }

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