import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { PosAttribute } from "../Attributes/PosAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute pos is used to identify the specific position of the reference
 * (e.g., in source or destination) with respect to the element being identified
 * with the relative eId.
 */
export class Pos extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: PosAttribute, required: false },
  ];
}