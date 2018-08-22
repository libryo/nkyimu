import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { AsAttribute } from "../Attributes/AsAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute role is used to identify the role of an individual mentioned in the text.
 * It is a reference to a TLCRole element in the references section
 */
export class Role extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: AsAttribute, required: false },
  ];
}