import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { ColspanAttribute } from "../Attributes/ColspanAttribute";
import { RowspanAttribute } from "../Attributes/RowspanAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attributes are used to specify that table cells span more than one row
 * or one column, exactly as in HTML
 */
export class Cellattrs extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: RowspanAttribute, required: false },
    { attribute: ColspanAttribute, required: false },
  ];
}