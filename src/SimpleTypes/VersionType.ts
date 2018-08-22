import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * This is the list of allowed values for the contains attribute.
 */
export class VersionType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(originalVersion|singleVersion|multipleVersions)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'versionType should be either originalVersion, singleVersion or multipleVersions';
}