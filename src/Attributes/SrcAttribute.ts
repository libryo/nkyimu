import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { ManifestationURI } from "../SimpleTypes/ManifestationURI";

export class SrcAttribute extends AbstractAttribute {

  static getClassName(): string { return 'SrcAttribute'; }

  get className(): string { return 'SrcAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'src';

  static getName() { return 'src'; }

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
    return (new ManifestationURI()).validate(value, 'src');
  }
}