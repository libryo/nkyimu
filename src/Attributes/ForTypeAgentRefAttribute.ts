import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { AgentRef } from "../SimpleTypes/AgentRef";

export class ForTypeAgentRefAttribute extends AbstractAttribute {

  static getClassName(): string { return 'ForTypeAgentRefAttribute'; }

  get className(): string { return 'ForTypeAgentRefAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'for';

  static getName() { return 'for'; }

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
    return (new AgentRef()).validate(value, 'for');
  }
}
