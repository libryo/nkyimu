import { Corereqreq } from "../AttributeGroups/Corereqreq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { InlineCM } from "../ElementGroups/InlineCM";

/**
 * the complex type inlinereq defines the content model and attributes
 * shared by all blocks and inlines. Here the eId attribute is
 * required and also the refersTo is required.
 */
export class Inlinereqreq implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    inReqReqChoice: {
      minOccur: 0,
      choice: true,
      options: {
        ...(new InlineCM()).CHILDREN_MAP,
      }
    },
    '': { minOccur: 0, options: {} },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereqreq()).items,
  ];
}
