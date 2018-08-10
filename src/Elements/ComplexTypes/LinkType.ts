import { Core } from "../../AttributeGroups/Core";
import { Idreq } from "../../AttributeGroups/Idreq";
import { Link } from "../../AttributeGroups/Link";
import { Show } from "../../AttributeGroups/Show";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The complex type linkType defines the empty content model and
 * the list of attributes for Work- or Expression-level references
 * to external resources
 */
export class LinkType implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {};

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new Idreq()).items,
    ...(new Link()).items,
    ...(new Show()).items,
  ];
}
