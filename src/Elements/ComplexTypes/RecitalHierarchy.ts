import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { BaseHierarchy } from "./BaseHierarchy";

export class RecitalHierarchy implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    ...(new BaseHierarchy()).CHILDREN_MAP,
    sequence: {
      maxOccur: 1,
      options: {
        intro: { maxOccur: 1, options: {} },
        choice: {
          options: {
            componentRef: { maxOccur: 1, options: {} },
            recital: { maxOccur: 1, options: {} },
          }
        },
        wrapUp: { maxOccur: 1, options: {} },
      }
    }
  };
}
