export abstract class AbstractAttribute {
  private value: string;

  readonly abstract name: string;

  /**
   * Constructor
   * 
   * @param name string
   * @param value string
   * 
   * @throws Exception
   */
  constructor(value: string) {
    if (!this.validate(value)) {
      this.throwError();
    }
    
    this.value = value;
  }

  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected abstract validate(value: string): boolean;

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected abstract getErrorMessage(): string;

  /**
   * Throw the described error.
   * 
   * @throws Error
   */
  throwError(): void {
    throw new Error(this.getErrorMessage());
  }

  /**
   * Get the name of the attribute
   */
  getName(): string {
    return this.name;
  }

  /**
   * Get the value of the attribute
   */
  getValue(): string {
    return this.value;
  }
}