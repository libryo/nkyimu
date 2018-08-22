import { Core } from "../AttributeGroups/Core";
import { Idopt } from "../AttributeGroups/Idopt";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * the complex type metaopt defines the content model and attributes shared by all
 * metadata elements. Here the eId attribute is optional
 */
export class Metaopt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {};

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new Idopt()).items,
  ];
}
