import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { HeightAttribute } from "../Attributes/HeightAttribute";
import { WidthAttribute } from "../Attributes/WidthAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * these attributes specify the dimension of the image.
 */
export class ImgAtts extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: WidthAttribute, required: false },
    { attribute: HeightAttribute, required: false },
  ];
}
