import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { Alt } from "./Alt";
import { Core } from "./Core";
import { Enactment } from "./Enactment";
import { HTMLattrs } from "./HTMLattrs";
import { Idreq } from "./Idreq";
import { Refers } from "./Refers";
import { Xmllang } from "./Xmllang";

/**
 * This is the list of the core attributes that all elements in the content part of
 * the document must have. In elements using this attribute definition the refersTo
 * attribute is optional but the eId attribute is required
 */
export class Corereq extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  public readonly items: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new HTMLattrs()).items,
    ...(new Enactment()).items,
    ...(new Idreq()).items,
    ...(new Refers()).items,
    ...(new Xmllang()).items,
    ...(new Alt()).items,
  ];
}
