import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * These values are references to existing References elements only,
 * i.e., given an existing eId of an element of the References section
 * of the form XYZ, the value is necessarily #XYZ
 */
export class ReferenceRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'referenceRef accepts only valid eIds in the form #abc';
}