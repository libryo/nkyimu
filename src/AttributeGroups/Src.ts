import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { AltAttribute } from "../Attributes/AltAttribute";
import { SrcAttribute } from "../Attributes/SrcAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attributes are used in manifestation-level references to specify external
 * manifestation-level resources to be loaded in place. The src attribute holds
 * the manifestation-level IRI of the resource, while the alt attribute holds the
 * text to be displayed in case the loading of the external resource is not possible
 * for any reason.
 */
export class Src extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: SrcAttribute, required: true },
    { attribute: AltAttribute, required: false },
  ];
}