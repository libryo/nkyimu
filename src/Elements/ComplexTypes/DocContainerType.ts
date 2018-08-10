import { Corereq } from "../../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { DocumentType } from "../Groups/DocumentType";
import { BaseHierarchy } from "./BaseHierarchy";

const type = new BaseHierarchy();
/**
 * The complex type docContainerType defines a shared content model
 * for elements that contain whole documents, namely attachment,
 * collectionItem, component.
 */
export class DocContainerType extends BaseHierarchy {

  readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    choice: {
      maxOccur: 1,
      options: {
        ...(new DocumentType()).CHILDREN_MAP,
        interstitial: { maxOccur: 1, options: {} },
        toc: { maxOccur: 1, options: {} },
        documentRef: { maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Corereq()).items,
  ];
}
