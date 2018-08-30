import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { PosType } from "../SimpleTypes/PosType";

/**
 * The attribute pos is used to identify the specific position of the reference
 * (e.g., in source or destination) with respect to the element being identified
 * with the relative eId.
 */
export class PosAttribute extends AbstractAttribute {

  static getClassName(): string { return 'PosAttribute'; }

  get className(): string { return 'PosAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'pos';

  static getName() { return 'pos'; }

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
    return (new PosType()).validate(value, 'pos');
  }
}
