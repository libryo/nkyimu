import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { AlternativeToAttribute } from "../Attributes/AlternativeToAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute alternativeTo is used to specify, when the element contains an
 * alternative version of some content, the eId of the main element which this
 * element is an alternative copy of
 */
export class Alt extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: AlternativeToAttribute, required: false },
  ];
}