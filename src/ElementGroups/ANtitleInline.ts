import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group ANtitleInline lists the elements that are inline,
 * are specific to the Akoma Ntoso vocabulary, and should only
 * be used within the initial elements (preface, preamble and coverpage)
 */
export class ANtitleInline implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    anTitInsChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        docType: { minOccur: 1, maxOccur: 1, options: {} },
        docTitle: { minOccur: 1, maxOccur: 1, options: {} },
        docNumber: { minOccur: 1, maxOccur: 1, options: {} },
        docProponent: { minOccur: 1, maxOccur: 1, options: {} },
        docDate: { minOccur: 1, maxOccur: 1, options: {} },
        legislature: { minOccur: 1, maxOccur: 1, options: {} },
        session: { minOccur: 1, maxOccur: 1, options: {} },
        shortTitle: { minOccur: 1, maxOccur: 1, options: {} },
        docAuthority: { minOccur: 1, maxOccur: 1, options: {} },
        docPurpose: { minOccur: 1, maxOccur: 1, options: {} },
        docCommittee: { minOccur: 1, maxOccur: 1, options: {} },
        docIntroducer: { minOccur: 1, maxOccur: 1, options: {} },
        docStage: { minOccur: 1, maxOccur: 1, options: {} },
        docStatus: { minOccur: 1, maxOccur: 1, options: {} },
        docJurisdiction: { minOccur: 1, maxOccur: 1, options: {} },
        docketNumber: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
