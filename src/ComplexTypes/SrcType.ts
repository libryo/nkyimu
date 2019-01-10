import { Core } from "../AttributeGroups/Core";
import { Idopt } from "../AttributeGroups/Idopt";
import { Show } from "../AttributeGroups/Show";
import { Src } from "../AttributeGroups/Src";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The complex type srcType defines the empty content model and the
 * list of attributes for manifestation-level references to external
 * resources
 */
export class SrcType implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {};

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new Idopt()).items,
    ...(new Src()).items,
    ...(new Show()).items,
  ];
}
