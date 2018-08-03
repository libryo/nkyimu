import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The complex type markeropt defines the content model and attributes
 * shared by all marker elements. Here the eId attribute is optional
 */
export class Markeropt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {};
}
