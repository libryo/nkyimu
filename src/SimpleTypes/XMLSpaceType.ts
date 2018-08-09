import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * The xml:space attribute is defined in the XML Standard (W3C Recommendation), White space handling
 */
export class XMLSpaceType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(default|preserve)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'xml:space should be either default or preserve';
}