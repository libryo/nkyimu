import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group speechSection lists the structures that should contain speeches
 */
export class SpeechSection implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        administrationOfOath: { maxOccur: 1, options: {} },
        rollCall: { maxOccur: 1, options: {} },
        prayers: { maxOccur: 1, options: {} },
        oralStatements: { maxOccur: 1, options: {} },
        writtenStatements: { maxOccur: 1, options: {} },
        personalStatements: { maxOccur: 1, options: {} },
        ministerialStatements: { maxOccur: 1, options: {} },
        resolutions: { maxOccur: 1, options: {} },
        nationalInterest: { maxOccur: 1, options: {} },
        declarationOfVote: { maxOccur: 1, options: {} },
        communication: { maxOccur: 1, options: {} },
        petitions: { maxOccur: 1, options: {} },
        papers: { maxOccur: 1, options: {} },
        noticesOfMotion: { maxOccur: 1, options: {} },
        questions: { maxOccur: 1, options: {} },
        address: { maxOccur: 1, options: {} },
        proceduralMotions: { maxOccur: 1, options: {} },
        pointOfOrder: { maxOccur: 1, options: {} },
        adjournment: { maxOccur: 1, options: {} },
        debateSection: { maxOccur: 1, options: {} },
      }
    }
  };
}
