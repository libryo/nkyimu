import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { ShortFormAttribute } from "../Attributes/ShortFormAttribute";
import { ShowAsAttribute } from "../Attributes/ShowAsAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attributes are used in metadata to propose visible representations of the metadata
 * itself. Both a full visualization (attribute showAs) and an abbreviated one
 * (attribute shortForm) can be specified
 */
export class ShowOpt extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: ShowAsAttribute, required: false },
    { attribute: ShortFormAttribute, required: false },
  ];
}