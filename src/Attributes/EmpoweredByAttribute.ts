import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { AgentRef } from "../SimpleTypes/AgentRef";


export class EmpoweredByAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'empoweredBy';

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
    return (new AgentRef()).validate(value, 'empoweredBy');
  }
}
