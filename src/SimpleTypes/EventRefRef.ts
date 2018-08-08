import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * These values are references to existing event references (i.e., eventRef) only,
 * i.e., given an existing eId of an eventRef of the form XYZ, the value is necessarily #XYZ
 */
export class EventRefRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'eventRefRef accepts only valid eIds in the form #abc';
}