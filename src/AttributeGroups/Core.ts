import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * This attribute list are used to specify the fact that any attribute can be specified
 * for this element if it belongs to a different namespace.
 */
export class Core extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
  ];
}
