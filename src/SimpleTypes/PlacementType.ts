import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * This is the list of allowed values for the placement attribute of notes.
 */
export class PlacementType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(side|left|right|bottom|inline)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'placementType should be either side, left, right, bottom or inline.';
}