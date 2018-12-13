import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { TargetAttribute } from "../Attributes/TargetAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * the attribute target specifies the target of the a element.
 */
export class Target extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: TargetAttribute, required: false },
  ];
}