import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { ClassAttribute } from "../Attributes/ClassAttribute";
import { StyleAttribute } from "../Attributes/StyleAttribute";
import { TitleAttribute } from "../Attributes/TitleAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attributes are used to specify class, style and title of the element, exactly as in HTML
 */
export class HTMLattrs extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: ClassAttribute, required: false },
    { attribute: StyleAttribute, required: false },
    { attribute: TitleAttribute, required: false },
  ];
}