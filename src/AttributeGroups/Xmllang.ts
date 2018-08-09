import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { XMLIdNamespaceAttribute } from "../Attributes/XMLIdNamespaceAttribute";
import { XMLLangNamespaceAttribute } from "../Attributes/XMLLangNamespaceAttribute";
import { XMLSpaceNamespaceAttribute } from "../Attributes/XMLSpaceNamespaceAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attribute specify the human language in which the content of the element is expressed
 * as well as the rules for whitespace management in the element. Values for xml:lang are taken
 * from the RFC 4646. Both xml:lang and xml:space are reserved attributes of the XML language,
 * and cannot be used for any other purpose than these ones.
 */
export class Xmllang extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: XMLLangNamespaceAttribute, required: false },
    { attribute: XMLSpaceNamespaceAttribute, required: false },
    { attribute: XMLIdNamespaceAttribute, required: false },
  ];
}