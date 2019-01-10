import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { InlineElements } from "./InlineElements";
import { MarkerElements } from "./MarkerElements";
import { SubFlowElements } from "./SubFlowElements";

/**
 * The group inlineCM is the content model of blocks and inlines,
 * and is composed of all the inlines and all the markers.
 */
export class InlineCM implements HasChildrenMap {
  public readonly CHILDREN_MAP: NodeRules = {
    inCMsChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        inElsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new InlineElements()).CHILDREN_MAP,
          }
        },
        mrkElsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new MarkerElements()).CHILDREN_MAP,
          }
        },
        subFlowElsGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new SubFlowElements()).CHILDREN_MAP,
          }
        },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
