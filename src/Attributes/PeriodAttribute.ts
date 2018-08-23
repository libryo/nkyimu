import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { TemporalGroupRef } from "../SimpleTypes/TemporalGroupRef";

export class PeriodAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'period';

  static getName() { return 'period'; }

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
    return (new TemporalGroupRef()).validate(value, 'period');
  }
}