import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { Core, Idreq, Link, Show } from "../AttributeGroups";

/**
 * The complex type referenceType defines the empty content model
 * and the list of attributes for metadata elements in the
 * references section
 */
export class ReferenceType implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {};

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new Idreq()).items,
    ...(new Link()).items,
    ...(new Show()).items
  ];
}
