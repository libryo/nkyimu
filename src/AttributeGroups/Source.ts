import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { SourceAttribute } from "../Attributes/SourceAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute source links to the agent (person, organization) providing the
 * specific annotation or markup
 */
export class Source extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: SourceAttribute, required: true },
  ];
}