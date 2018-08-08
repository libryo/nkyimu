import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { LevelAttribute } from "../Attributes/LevelAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * the attribute level specifies the level of the toc element.
 */
export class Level extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: LevelAttribute, required: true },
  ];
}