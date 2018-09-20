import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group docrefs is a list of types of legal references to documents.
 */
export class DocRefs implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {
    docRefChoices: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        original: { minOccur: 1, maxOccur: 1, options: {} },
        passiveRef: { minOccur: 1, maxOccur: 1, options: {} },
        activeRef: { minOccur: 1, maxOccur: 1, options: {} },
        jurisprudence: { minOccur: 1, maxOccur: 1, options: {} },
        hasAttachment: { minOccur: 1, maxOccur: 1, options: {} },
        attachmentOf: { minOccur: 1, maxOccur: 1, options: {} }
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];
}
