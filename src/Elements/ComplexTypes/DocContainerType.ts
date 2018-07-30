import { BaseHierarchy } from "./BaseHierarchy";
import { DocumentType } from "../Groups/DocumentType";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The complex type docContainerType defines a shared content model
 * for elements that contain whole documents, namely attachment,
 * collectionItem, component.
 */
export class DocContainerType extends BaseHierarchy {

  readonly CHILDREN_MAP: NodeRules = {
    ...(new BaseHierarchy()).CHILDREN_MAP,
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

  static getRegExp(): RegExp {
    const base = BaseHierarchy.getRegExp().source;
    const documents = DocumentType.getRegExp().source;
    const choice = `((${documents})|<interstitial>|<toc>|<documentRef>)`;

    return new RegExp(base + choice);
  }
}
