import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * This is the list of allowed values for the type attribute of the opinion element
 */
export class OpinionType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(dissenting|agreeing|null)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'opinionType should be either dissenting, agreeing or null';
}

