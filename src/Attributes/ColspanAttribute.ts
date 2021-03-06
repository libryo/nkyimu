import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { OnlyNumbers } from "../SimpleTypes/OnlyNumbers";

export class ColspanAttribute extends AbstractAttribute {

  static getClassName(): string { return 'ColspanAttribute'; }

  get className(): string { return 'ColspanAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'colspan';

  static getName() { return 'colspan'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = '1';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: number): boolean {
    return (new OnlyNumbers()).validate(value, 'colspan');
  }
}
