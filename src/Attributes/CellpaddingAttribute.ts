import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { OnlyNumbers } from "../SimpleTypes/OnlyNumbers";

export class CellpaddingAttribute extends AbstractAttribute {

  static getClassName(): string { return 'CellpaddingAttribute'; }

  get className(): string { return 'CellpaddingAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'cellpadding';

  static getName() { return 'cellpadding'; }

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
  validate(value: number): boolean {
    return (new OnlyNumbers()).validate(value, 'cellpadding');
  }
}
