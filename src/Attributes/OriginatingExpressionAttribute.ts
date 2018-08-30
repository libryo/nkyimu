import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class OriginatingExpressionAttribute extends AbstractAttribute {

  static getClassName(): string { return 'OriginatingExpressionAttribute'; }

  get className(): string { return 'OriginatingExpressionAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'originatingExpression';

  static getName() { return 'originatingExpression'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue: string = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: boolean): boolean {
    return true;
  }
}