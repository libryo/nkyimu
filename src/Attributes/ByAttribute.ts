import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { AgentRef } from "../SimpleTypes/AgentRef";

/**
 * The attribute by is used to identify the agent of an action. It is a reference to a
 * TLCPerson or TLCOrganization element in the references section
 */
export class ByAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'by';

  static getName() { return 'by'; }

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
    return (new AgentRef()).validate(value, 'by');
  }
}
