import { Corereq } from "../../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
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
    subfStrChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        subfStrChoiceDocTypeGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new DocumentType()).CHILDREN_MAP,
          }
        },
        subfStrChoiceChoice: {
          choice: true,
          minOccur: 1,
          options: {
            subfStrChoiceBlkElsGrp: {
              minOccur: 1,
              maxOccur: 1,
              options: {
                ...(new BlockElements()).CHILDREN_MAP,
              }
            },
            subfStrChoiceContElsGrp: {
              minOccur: 1,
              maxOccur: 1,
              options: {
                ...(new ContainerElements()).CHILDREN_MAP,
              }
            },
            tr: { minOccur: 1, maxOccur: 1, options: {} },
            th: { minOccur: 1, maxOccur: 1, options: {} },
            td: { minOccur: 1, maxOccur: 1, options: {} },
            subfStrChoiceHierElsGrp: {
              minOccur: 1,
              maxOccur: 1,
              options: {
                ...(new HierElements()).CHILDREN_MAP,
              }
            },
            content: { minOccur: 1, maxOccur: 1, options: {} },
            subfStrChoiceAnContsGrp: {
              minOccur: 1,
              maxOccur: 1,
              options: {
                ...(new ANcontainers()).CHILDREN_MAP,
              }
            },
            formula: { minOccur: 1, maxOccur: 1, options: {} },
            recitals: { minOccur: 1, maxOccur: 1, options: {} },
            citations: { minOccur: 1, maxOccur: 1, options: {} },
            longTitle: { minOccur: 1, maxOccur: 1, options: {} },
            recital: { minOccur: 1, maxOccur: 1, options: {} },
            citation: { minOccur: 1, maxOccur: 1, options: {} },
            componentRef: { minOccur: 1, maxOccur: 1, options: {} },
            documentRef: { minOccur: 1, maxOccur: 1, options: {} },
            intro: { minOccur: 1, maxOccur: 1, options: {} },
            wrapUp: { minOccur: 1, maxOccur: 1, options: {} },
            heading: { minOccur: 1, maxOccur: 1, options: {} },
            subheading: { minOccur: 1, maxOccur: 1, options: {} },
            num: { minOccur: 1, maxOccur: 1, options: {} },
          },
        },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
  ];
}
