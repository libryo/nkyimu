
export abstract class AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly abstract name: string;

  /**
   * The default value of the attribute.
   */
  readonly abstract defaultValue: string;

  /**
   * The current value of the attribute.
   */
  private value: string|number|boolean;

  /**
   * Constructor
   *
   * @param name string
   * @param value string
   *
   * @throws Exception
   */
  constructor(value: string|number|boolean) {
    this.validate(value);

    this.value = value;
  }

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  abstract validate(value: string|boolean|number): boolean;

  /**
   * Get the name of the attribute
   */
  getName(): string {
    return this.name;
  }

  /**
   * Get the value of the attribute
   */
  getValue(): string|number|boolean {
    return this.value;
  }

  static getClassName(): string {
    throw new Error('Implement the function getClassName');
  }

  get className(): string {
    throw new Error('Implement the function className');
  }
}