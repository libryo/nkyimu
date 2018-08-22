import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

export abstract class AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly abstract items: AttributeGroupItem[];
}