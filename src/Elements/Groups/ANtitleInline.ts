import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group ANtitleInline lists the elements that are inline,
 * are specific to the Akoma Ntoso vocabulary, and should only
 * be used within the initial elements (preface, preamble and coverpage)
 */
export class ANtitleInline implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    antIns: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        docType: { maxOccur: 1, options: {} },
        docTitle: { maxOccur: 1, options: {} },
        docNumber: { maxOccur: 1, options: {} },
        docProponent: { maxOccur: 1, options: {} },
        docDate: { maxOccur: 1, options: {} },
        legislature: { maxOccur: 1, options: {} },
        session: { maxOccur: 1, options: {} },
        shortTitle: { maxOccur: 1, options: {} },
        docAuthority: { maxOccur: 1, options: {} },
        docPurpose: { maxOccur: 1, options: {} },
        docCommittee: { maxOccur: 1, options: {} },
        docIntroducer: { maxOccur: 1, options: {} },
        docStage: { maxOccur: 1, options: {} },
        docStatus: { maxOccur: 1, options: {} },
        docJurisdiction: { maxOccur: 1, options: {} },
        docketNumber: { maxOccur: 1, options: {} },
      },
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
