import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ANcontainers } from "../Groups/ANcontainers";
import { BlockElements } from "../Groups/BlockElements";
import { ContainerElements } from "../Groups/ContainerElements";
import { DocumentType } from "../Groups/DocumentType";
import { HierElements } from "../Groups/HierElements";

/**
 * The type subFlowStructure specifies the overall content model of
 * the elements that are subFlows.
 */
export class SubFlowStructure implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        ...(new DocumentType()).CHILDREN_MAP,

        choice: {
          minOccur: 1,
          options: {
            ...(new BlockElements()).CHILDREN_MAP,
            ...(new ContainerElements()).CHILDREN_MAP,
            tr: { maxOccur: 1, options: {} },
            th: { maxOccur: 1, options: {} },
            td: { maxOccur: 1, options: {} },
            ...(new HierElements()).CHILDREN_MAP,
            content: { maxOccur: 1, options: {} },
            ...(new ANcontainers()).CHILDREN_MAP,
            formula: { maxOccur: 1, options: {} },
            recitals: { maxOccur: 1, options: {} },
            citations: { maxOccur: 1, options: {} },
            longTitle: { maxOccur: 1, options: {} },
            recital: { maxOccur: 1, options: {} },
            citation: { maxOccur: 1, options: {} },
            componentRef: { maxOccur: 1, options: {} },
            documentRef: { maxOccur: 1, options: {} },
            intro: { maxOccur: 1, options: {} },
            wrapUp: { maxOccur: 1, options: {} },
            heading: { maxOccur: 1, options: {} },
            subheading: { maxOccur: 1, options: {} },
            num: { maxOccur: 1, options: {} },
          },
        },
      }
    }
  };
}
