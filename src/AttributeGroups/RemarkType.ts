import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { TypeRemarkTypeAttribute } from "../Attributes/TypeRemarkTypeAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

export class RemarkType extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TypeRemarkTypeAttribute, required: false },
  ];
}