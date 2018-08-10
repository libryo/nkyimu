import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { InlineElements } from "./InlineElements";
import { MarkerElements } from "./MarkerElements";
import { SubFlowElements } from "./SubFlowElements";

/**
 * The group inlineCM is the content model of blocks and inlines,
 * and is composed of all the inlines and all the markers.
 */
export class InlineCM implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        ...(new InlineElements()).CHILDREN_MAP,
        ...(new MarkerElements()).CHILDREN_MAP,
        ...(new SubFlowElements()).CHILDREN_MAP,
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
