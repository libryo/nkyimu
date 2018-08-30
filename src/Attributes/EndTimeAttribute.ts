import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class EndTimeAttribute extends AbstractAttribute {

  static getClassName(): string { return 'EndTimeAttribute'; }

  get className(): string { return 'EndTimeAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'endTime';

  static getName() { return 'endTime'; }

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
    return true;
  }
}