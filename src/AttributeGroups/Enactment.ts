import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { StatusAttribute } from "../Attributes/StatusAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { Period } from "./Period";

/**
 * These attributes are those already defined in attribute list "period", plus the
 * attribute status, that allows to specify the status of the piece of text it wraps.
 */
export class Enactment extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    ...(new Period()).items,
    { attribute: StatusAttribute, required: false },
  ];
}