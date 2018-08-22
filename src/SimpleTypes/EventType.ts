import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * This is the list of allowed values for the type attribute of the eventRef element
 */
export class EventType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(generation|amendment|repeal)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'eventType should be either generation, amendment or repeal';
}

