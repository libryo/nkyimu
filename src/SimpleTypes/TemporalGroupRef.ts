import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * These values are references to existing temporal groups only,
 * i.e., given an existing eId of a temporal group of the form XYZ,
 * the value is necessarily #XYZ
 */
export class TemporalGroupRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'temporalGroupRef accepts only valid eIds in the form #abc';
}