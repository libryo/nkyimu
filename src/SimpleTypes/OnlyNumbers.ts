import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * These values are those of ids such as eId, wId and GUID as a collection
 * of any printable character except whitespaces.
 */
export class OnlyNumbers extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^[0-9]+$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'number should only contain numeric characters.';
}