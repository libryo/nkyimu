import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export interface AttributeGroupItem {
  attribute: typeof AbstractAttribute;
  required: boolean;
}
