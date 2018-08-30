import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { OnlyNumbers } from "../SimpleTypes/OnlyNumbers";

export class LevelAttribute extends AbstractAttribute {

  static getClassName(): string { return 'LevelAttribute'; }

  get className(): string { return 'LevelAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'level';

  static getName() { return 'level'; }

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
  validate(value: number): boolean {
    return (new OnlyNumbers()).validate(value, 'level');
  }
}