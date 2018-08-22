import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * These values are references to existing concepts
 * (i.e., TLCConcept) only, i.e., given an existing
 * eId of a concept of the form XYZ, the value is
 * necessarily #XYZ
 */
export class ConceptRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'conceptRef accepts only valid eIds in the form #abc';
}