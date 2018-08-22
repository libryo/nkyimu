import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { BorderAttribute } from "../Attributes/BorderAttribute";
import { CellpaddingAttribute } from "../Attributes/CellpaddingAttribute";
import { CellspacingAttribute } from "../Attributes/CellspacingAttribute";
import { WidthAttribute } from "../Attributes/WidthAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";

/**
 * These attributes specify the characteristics of the table.
 */
export class TableAtts extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    { attribute: WidthAttribute, required: false },
    { attribute: BorderAttribute, required: false },
    { attribute: CellpaddingAttribute, required: false },
    { attribute: CellspacingAttribute, required: false },
  ];
}
