import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { VersionType } from "../SimpleTypes/VersionType";

/**
 * The attribute contains is used in the root of document types to indicate
 * whether the document is original or modified wrt the original version
 */
export class ContainsAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'contains';

  static getName() { return 'contains'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = 'originalVersion';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new VersionType()).validate(value, 'contains');
  }
}