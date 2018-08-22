import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { ByAttribute } from "../Attributes/ByAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute by is used to identify the agent of an action. It is a reference to a
 * TLCPerson or TLCOrganization element in the references section
 */
export class Agent extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: ByAttribute, required: true },
  ];
}