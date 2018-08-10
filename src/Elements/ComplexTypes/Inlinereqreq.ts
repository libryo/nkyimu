import { Corereqreq } from "../../AttributeGroups/Corereqreq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { InlineCM } from "../Groups/InlineCM";

/**
 * the complex type inlinereq defines the content model and attributes
 * shared by all blocks and inlines. Here the eId attribute is
 * required and also the refersTo is required.
 */
export class Inlinereqreq {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      minOccur: 0,
      options: {
        ...(new InlineCM()).CHILDREN_MAP,
      }
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereqreq()).items,
  ];
}
