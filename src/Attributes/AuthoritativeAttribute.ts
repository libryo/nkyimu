import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class AuthoritativeAttribute extends AbstractAttribute {

  static getClassName(): string { return 'AuthoritativeAttribute'; }

  get className(): string { return 'AuthoritativeAttribute'; }

  static getName() { return 'authoritative'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'authoritative';

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
  public validate(value: string): boolean {
    return true;
  }
}