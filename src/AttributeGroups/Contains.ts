import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { ContainsAttribute } from "../Attributes/ContainsAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * The attribute contains is used in the root of document types to indicate
 * whether the document is original or modified wrt the original version
 */
export class Contains extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: ContainsAttribute, required: false },
  ];
}