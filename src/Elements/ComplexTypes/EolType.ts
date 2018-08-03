import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Markeropt } from "./Markeropt";

/**
 * The complex type eolType is shared by eol and eop elements as
 * being able to specify a hyphen character and a position within
 * the next word in which the break can happen, and the number
 * if any, associated to the page or line at issue.
 */
export class EolType extends Markeropt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {};
}
