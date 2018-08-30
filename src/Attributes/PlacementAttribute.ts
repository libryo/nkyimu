import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { PlacementType } from "../SimpleTypes/PlacementType";

export class PlacementAttribute extends AbstractAttribute {

  static getClassName(): string { return 'PlacementAttribute'; }

  get className(): string { return 'PlacementAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'placement';

  static getName() { return 'placement'; }

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
    return (new PlacementType()).validate(value, 'placement');
  }
}