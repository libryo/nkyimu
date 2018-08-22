import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * These values are references to existing wIds only, i.e., given an
 * existing wId of the form XYZ, the value is necessarily #XYZ
 */
export class WIdRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'wIdRef accepts only valid eIds in the form #abc';
}