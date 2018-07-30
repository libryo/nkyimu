import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The type documentType lists all the document types that are
 * managed by Akoma Ntoso.
 */
export class DocumentType implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        amendmentList: { maxOccur: 1, options: {} },
        officialGazette: { maxOccur: 1, options: {} },
        documentCollection: { maxOccur: 1, options: {} },
        act: { maxOccur: 1, options: {} },
        bill: { maxOccur: 1, options: {} },
        debateReport: { maxOccur: 1, options: {} },
        debate: { maxOccur: 1, options: {} },
        statement: { maxOccur: 1, options: {} },
        amendment: { maxOccur: 1, options: {} },
        judgment: { maxOccur: 1, options: {} },
        portion: { maxOccur: 1, options: {} },
        doc: { maxOccur: 1, options: {} },
      }
    }
  };

  static getRegExp():RegExp {
    return /<amendmentList|officialGazette|documentCollection|act|bill|debateReport|debate|statement|amendment|judgment|portion|doc>/;
  }
}

