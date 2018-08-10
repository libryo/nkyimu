import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { NormalizedAttribute } from "../Attributes/NormalizedAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute name is used to give a name to all generic elements.
 */
export class NormalizedAtt extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: NormalizedAttribute, required: false },
  ];
}