import { NodeRules } from "./NodeRules";

export interface Rule {
  choice?: boolean;
  minOccur?: number;
  maxOccur?: number;
  isChoice?: boolean;
  choiceMaxOccur?: number;
  choiceMinOccur?: number;
  options: NodeRules;
}
