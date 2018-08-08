import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * This is the list of allowed values for the type attribute of the result element
 */
export class ResultType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(deny|dismiss|uphold|revert|replace|remit|decide|approve)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'resultType should be either deny, dismiss, uphold, revert, replace, remit, decide or approve.';
}

