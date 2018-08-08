import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { AgentRef } from "../SimpleTypes/AgentRef";
import { VoteRef } from "../SimpleTypes/VoteRef";


export class ChoiceAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'choice';

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
    return (new VoteRef()).validate(value, 'choice');
  }
}
