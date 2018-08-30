import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { AgentRef } from "../SimpleTypes/AgentRef";

export class ToAttribute extends AbstractAttribute {

  static getClassName(): string { return 'ToAttribute'; }

  get className(): string { return 'ToAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'to';

  static getName() { return 'to'; }

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
    return (new AgentRef()).validate(value, 'to');
  }
}
