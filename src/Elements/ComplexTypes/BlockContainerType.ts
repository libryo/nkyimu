import { BlockElements } from "../Groups/BlockElements";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { BaseHierarchy } from "./BaseHierarchy";

/**
 * The blockContainerType is the type of element blockContainer
 */
export class BlockContainerType implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    ...(new BaseHierarchy()).CHILDREN_MAP,
    sequence: {
      options: {
        intro: { minOccur: 1, options: {} },
        choice: {
          options: {
            componentRef: { minOccur: 1, options: {} },
            ...(new BlockElements()).CHILDREN_MAP,
            crossHeading: { minOccur: 1, options: {} },
          }
        },
        wrapUp: { maxOccur: 1, options: {} },
      }
    }
  };
}