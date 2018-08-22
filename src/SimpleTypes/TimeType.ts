import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * This is the list of allowed values for the type attribute of the recordedTime element
 * for the specification of an explicit mention of a time (e.g., in a debate)
 */
export class TimeType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(startEvent|endEvent)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'timeType should be either startEvent or endEvent';
}