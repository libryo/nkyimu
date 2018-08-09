import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { EIdAttribute } from "../Attributes/EIdAttribute";
import { GUIDAttribute } from "../Attributes/GUIDAttribute";
import { WIdAttribute } from "../Attributes/WIdAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attributes identify the element in an absolute manner. In elements using
 * this attribute definition the eId attribute is required whenever the Akoma Ntoso
 * naming Convention is used. The wId is used to mark the identifier that the
 * structure used to have in the original version, and is only needed when a
 * renumbering occurred.
 */
export class Idreq extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: EIdAttribute, required: true },
    { attribute: WIdAttribute, required: false },
    { attribute: GUIDAttribute, required: false },
  ];
}