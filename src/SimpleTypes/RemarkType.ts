import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * This is the list of allowed values for the type attribute of the remark element for the
 * specification of editorial remarks (e.g., applauses, laughters, etc.) especially within debate records
 */
export class RemarkType extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^(sceneDescription|phenomenon|caption|translation)$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'statusType should be either sceneDescription, phenomenon, caption or translation';
}
