import { AbstractAttribute } from "../Abstract/AbstractAttribute";

export interface AttributeGroupItem {
  attribute: typeof AbstractAttribute;
  required: boolean;
}
