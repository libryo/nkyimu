import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { HrefAttribute } from "../Attributes/HrefAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute href is used to specify an internal or external destination for a
 * reference, a citation, an access to the ontology or a hypertext link. In elements
 * using this attribute definition the href attribute is optional
 */
export class Linkopt extends AbstractAttributeGroup {
  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: HrefAttribute, required: false },
  ];
}