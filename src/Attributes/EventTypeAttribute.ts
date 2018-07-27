import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class EventTypeAttribute extends AbstractAttribute {

  readonly name ='eventType';

  private static OPTIONS: string[] = [
    'generation',
    'amendment',
    'repeal'
  ];
  
  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    return EventTypeAttribute.OPTIONS.indexOf(value) !== -1;
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The eventType attribute should have a value of either generation, amendment or repeal';
  }
}