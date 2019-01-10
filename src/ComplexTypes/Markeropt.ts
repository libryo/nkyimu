import { Coreopt } from "../AttributeGroups/Coreopt";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The complex type markeropt defines the content model and attributes
 * shared by all marker elements. Here the eId attribute is optional
 */
export class Markeropt implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {};

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items,
  ];
}
