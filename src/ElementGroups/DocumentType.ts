import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The type documentType lists all the document types that are
 * managed by Akoma Ntoso.
 */
export class DocumentType implements HasChildrenMap {
  public readonly CHILDREN_MAP: NodeRules = {
    docTypeChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        amendmentList: { minOccur: 1, maxOccur: 1, options: {} },
        officialGazette: { minOccur: 1, maxOccur: 1, options: {} },
        documentCollection: { minOccur: 1, maxOccur: 1, options: {} },
        act: { minOccur: 1, maxOccur: 1, options: {} },
        bill: { minOccur: 1, maxOccur: 1, options: {} },
        debateReport: { minOccur: 1, maxOccur: 1, options: {} },
        debate: { minOccur: 1, maxOccur: 1, options: {} },
        statement: { minOccur: 1, maxOccur: 1, options: {} },
        amendment: { minOccur: 1, maxOccur: 1, options: {} },
        judgment: { minOccur: 1, maxOccur: 1, options: {} },
        portion: { minOccur: 1, maxOccur: 1, options: {} },
        doc: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}

