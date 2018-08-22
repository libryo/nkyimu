import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * These values are references to existing eIds only, i.e., given an existing eId
 * of the form XYZ, the value is necessarily #XYZ
 */
export class EIdRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'eIdRef accepts only valid eIds in the form #abc';
}