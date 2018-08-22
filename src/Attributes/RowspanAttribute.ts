import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { OnlyNumbers } from "../SimpleTypes/OnlyNumbers";

export class RowspanAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'rowspan';

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
    return (new OnlyNumbers()).validate(value, 'rowspan');
  }
}
