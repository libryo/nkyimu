import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * These values are references to existing votes (i.e., quorum or count)
 * only, i.e., given an existing eId of a vote element of the form XYZ,
 * the value is necessarily #XYZ
 */
export class VoteRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'voteRef accepts only valid eIds in the form #abc';
}