import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { Language } from "../SimpleTypes/Language";
import { XMLSpaceType } from "../SimpleTypes/XMLSpaceType";

export class XMLSpaceNamespaceAttribute extends AbstractAttribute {

  static getClassName(): string { return 'XMLSpaceNamespaceAttribute'; }

  get className(): string { return 'XMLSpaceNamespaceAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'xmlns:space';

  static getName() { return 'xmlns:space'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = 'preserve';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new XMLSpaceType()).validate(value, 'xmlns:space');
  }
}