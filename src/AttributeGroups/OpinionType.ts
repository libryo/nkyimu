import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { TypeOpinionTypeAttribute } from "../Attributes/TypeOpinionTypeAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { Agent } from "./Agent";

/**
 * these attributes specify the dimension of the image.
 */
export class OpinionType extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    ...(new Agent()).items,
    { attribute: TypeOpinionTypeAttribute, required: false },
  ];
}
