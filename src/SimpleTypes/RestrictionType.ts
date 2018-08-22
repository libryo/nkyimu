import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * This is the list of allowed values for the restriction type attribute
 */
export class RestrictionType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^jurisdiction$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'restrictionType should only be jurisdiction.';
}

