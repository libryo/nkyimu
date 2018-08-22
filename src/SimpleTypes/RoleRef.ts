import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * These values are references to existing roles (i.e., TLCRole)
 * only, i.e., given an existing eId of a role of the form XYZ,
 * the value is necessarily #XYZ
 */
export class RoleRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'roleRef accepts only valid eIds in the form #abc';
}