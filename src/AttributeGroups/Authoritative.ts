import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { AuthoritativeAttribute } from "../Attributes";

/**
 * This attribute specifies whether the translation is authoritative or not
 */
export class Authoritative extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: AuthoritativeAttribute, required: false },
  ];
}
