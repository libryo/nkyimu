import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * These values are those of ids such as eId, wId and GUID as a collection
 * of any printable character except whitespaces.
 */
export class NoWhiteSpace extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'noWhiteSpace should not contain any white spaces.';
}