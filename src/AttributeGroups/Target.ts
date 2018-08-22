import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { TargetAttribute } from "../Attributes/TargetAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute name is used to give a name to all generic elements.
 */
export class Target extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TargetAttribute, required: true },
  ];
}