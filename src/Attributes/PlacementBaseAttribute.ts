import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { EIdRef } from "../SimpleTypes/EIdRef";

export class PlacementBaseAttribute extends AbstractAttribute {

  static getClassName(): string { return 'PlacementBaseAttribute'; }

  get className(): string { return 'PlacementBaseAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'placementBase';

  static getName() { return 'placementBase'; }

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
    return (new EIdRef()).validate(value, 'placementBase');
  }
}