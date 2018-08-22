export abstract class AbstractSimpleType {

  /**
   * The restricted values that the type accepts.
   */
  readonly abstract restriction: RegExp;

  /**
   * The error message to throw.
   */
  readonly abstract errorMessage: string;

  /**
   * Validate the given value.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string|boolean|number, name?: string): boolean {
    if (!this.restriction.test(value.toString())) {
      throw new Error(`${name}: ${this.errorMessage}`);
    }

    return true;
  }
}