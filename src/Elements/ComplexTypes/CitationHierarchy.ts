import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BaseHierarchy } from "./BaseHierarchy";

/**
 * The element citations is the section of the preamble that contains
 * citations
 */
export class CitationHierarchy implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    ...(new BaseHierarchy()).CHILDREN_MAP,
    sequence: {
      options: {
        intro: { maxOccur: 1, options: {} },
        choice: {
          options: {
            componentRef: { maxOccur: 1, options: {} },
            citation: { maxOccur: 1, options: {} },
          }
        },
        wrapUp: { maxOccur: 1, options: {} },
      }
    }
  };
}
