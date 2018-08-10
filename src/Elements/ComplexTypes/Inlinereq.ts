import { Corereq } from "../../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { InlineCM } from "../Groups/InlineCM";

/**
 * The complex type inlinereq defines the content model
 * and attributes shared by all blocks and inlines.
 * Here the eId attribute is required
 */
export class Inlinereq {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      minOccur: 0,
      options: {
        ...(new InlineCM()).CHILDREN_MAP,
      }
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
  ];
}
