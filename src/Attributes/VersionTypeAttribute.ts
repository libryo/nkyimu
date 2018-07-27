import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class VersionTypeAttribute extends AbstractAttribute {

  readonly name ='versionType';

  private static OPTIONS: string[] = [
    'originalVersion',
    'singleVersion',
    'multipleVersions',
  ];

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    return VersionTypeAttribute.OPTIONS.indexOf(value) !== -1;
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The versionType attribute can only have a value of originalVersion, singleVersion or multipleVersions';
  }
}