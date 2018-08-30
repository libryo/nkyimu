import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { EIdRef } from "../SimpleTypes/EIdRef";

export class FromAttribute extends AbstractAttribute {

  static getClassName(): string { return 'FromAttribute'; }

  get className(): string { return 'FromAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'from';

  static getName() { return 'from'; }

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
    return (new EIdRef()).validate(value, 'from');
  }
}
