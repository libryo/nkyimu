import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * This is the list of possible positions of the text being analyzed
 * by the element in the analysis section
 */
export class PosType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(start|before|inside|after|end|unspecified)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'posType should be either start, before, inside, after, end or unspecified.';
}
