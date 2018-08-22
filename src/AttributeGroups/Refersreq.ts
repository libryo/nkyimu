import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { RefersToAttribute } from "../Attributes/RefersToAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * This attribute creates a connection between the element and an element of the Akoma Ntoso
 * ontology to which it refers. In elements using this attribute definition the refersTo
 * attribute is required
 */
export class Refersreq extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: RefersToAttribute, required: true },
  ];
}