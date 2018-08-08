import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { AgentRef } from "../SimpleTypes/AgentRef";

export class ForAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'for';

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
