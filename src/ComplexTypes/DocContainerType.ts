import { Corereq } from "../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { NodeRules } from "../Interfaces/NodeRules";
import { DocumentType } from "../ElementGroups/DocumentType";
import { BaseHierarchy } from "./BaseHierarchy";

const type = new BaseHierarchy();
/**
 * The complex type docContainerType defines a shared content model
 * for elements that contain whole documents, namely attachment,
 * collectionItem, component.
 */
export class DocContainerType extends BaseHierarchy {

  public readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    docConType: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        docConTypeGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new DocumentType()).CHILDREN_MAP,
          }
        },
        interstitial: { minOccur:1, maxOccur: 1, options: {} },
        toc: { minOccur:1, maxOccur: 1, options: {} },
        documentRef: { minOccur:1, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Corereq()).items,
  ];
}
