import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { AgentRef } from "../SimpleTypes/AgentRef";


export class EmpoweredByAttribute extends AbstractAttribute {

  static getClassName(): string { return 'EmpoweredByAttribute'; }

  get className(): string { return 'EmpoweredByAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'empoweredBy';

  static getName() { return 'empoweredBy'; }

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
