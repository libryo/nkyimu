import { Corereq } from "../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { NodeRules } from "../Interfaces/NodeRules";
import { InlineCM } from "../ElementGroups/InlineCM";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";

/**
 * The complex type inlinereq defines the content model
 * and attributes shared by all blocks and inlines.
 * Here the eId attribute is required
 */
export class Inlinereq implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    inReqChoice: {
      minOccur: 0,
      choice: true,
      options: {
        ...(new InlineCM()).CHILDREN_MAP,
      }
    },
    '': { minOccur: 0, options: {} },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
  ];
}
