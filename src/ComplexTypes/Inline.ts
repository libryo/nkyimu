import { Coreopt } from "../AttributeGroups/Coreopt";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { InlineCM } from "../ElementGroups/InlineCM";

/**
 * The complex type inline defines the content model and
 * attributes shared by all blocks and inlines. Here the
 * eId attribute is optional
 */
export class Inline implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    ins: {
      minOccur: 0,
      choice: true,
      options: {
        ...(new InlineCM()).CHILDREN_MAP,
      }
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items,
  ];
}
