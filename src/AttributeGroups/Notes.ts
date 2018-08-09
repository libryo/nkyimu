import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { MarkerAttribute } from "../Attributes/MarkerAttribute";
import { PlacementAttribute } from "../Attributes/PlacementAttribute";
import { PlacementBaseAttribute } from "../Attributes/PlacementBaseAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attributes are used by notes, both authorial and editorial. The marker
 * is the string to be used as a marker of the note, the placement is the position
 * where the note should be placed, and placementBase is the eId of the element
 * respect to which the note should be placed near.
 */
export class Notes extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: MarkerAttribute, required: false },
    { attribute: PlacementAttribute, required: false },
    { attribute: PlacementBaseAttribute, required: false },
  ];
}