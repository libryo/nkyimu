import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * These values are references of a manifestation-Level document only
 */
export class ManifestationURI extends AbstractSimpleType {

  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /.+/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = '';
}