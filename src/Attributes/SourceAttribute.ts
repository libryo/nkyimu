import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { AgentRef } from "../SimpleTypes/AgentRef";

/**
 * The attribute source links to the agent (person, organization) providing the
 * specific annotation or markup
 */
export class SourceAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'source';

  static getName() { return 'source'; }

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
    return (new AgentRef()).validate(value, 'source');
  }
}
