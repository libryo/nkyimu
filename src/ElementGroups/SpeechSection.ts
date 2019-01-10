import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group speechSection lists the structures that should contain speeches
 */
export class SpeechSection implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    speechSecChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        administrationOfOath: { minOccur: 1, maxOccur: 1, options: {} },
        rollCall: { minOccur: 1, maxOccur: 1, options: {} },
        prayers: { minOccur: 1, maxOccur: 1, options: {} },
        oralStatements: { minOccur: 1, maxOccur: 1, options: {} },
        writtenStatements: { minOccur: 1, maxOccur: 1, options: {} },
        personalStatements: { minOccur: 1, maxOccur: 1, options: {} },
        ministerialStatements: { minOccur: 1, maxOccur: 1, options: {} },
        resolutions: { minOccur: 1, maxOccur: 1, options: {} },
        nationalInterest: { minOccur: 1, maxOccur: 1, options: {} },
        declarationOfVote: { minOccur: 1, maxOccur: 1, options: {} },
        communication: { minOccur: 1, maxOccur: 1, options: {} },
        petitions: { minOccur: 1, maxOccur: 1, options: {} },
        papers: { minOccur: 1, maxOccur: 1, options: {} },
        noticesOfMotion: { minOccur: 1, maxOccur: 1, options: {} },
        questions: { minOccur: 1, maxOccur: 1, options: {} },
        address: { minOccur: 1, maxOccur: 1, options: {} },
        proceduralMotions: { minOccur: 1, maxOccur: 1, options: {} },
        pointOfOrder: { minOccur: 1, maxOccur: 1, options: {} },
        adjournment: { minOccur: 1, maxOccur: 1, options: {} },
        debateSection: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
