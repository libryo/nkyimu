import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { DateAttribute } from "../Attributes/DateAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute source links to the agent (person, organization) providing the
 * specific annotation or markup
 */
export class Date extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: DateAttribute, required: true },
  ];
}