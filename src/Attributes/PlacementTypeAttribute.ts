import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export class PlacementTypeAttribute extends AbstractAttribute {

  readonly name ='placementType';
  
  private static OPTIONS: string[] = [
    'side',
    'left',
    'right',
    'bottom',
    'inline',
  ];
  /**
   * Validate that the attributes are correct.
   * 
   * @param value string
   * 
   * @returns boolean
   */
  protected validate(value: string): boolean {
    return PlacementTypeAttribute.OPTIONS.indexOf(value) !== -1;
  }

  /**
   * Get the error message to throw when validation fails.
   * 
   * @returns string
   */
  protected getErrorMessage(): string {
    return 'The placementType attribute can only have a value of side, left, right, bottom or inline';
  }
}