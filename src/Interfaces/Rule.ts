import { NodeRules } from "./NodeRules";

export interface Rule {
  minOccur?: number;
  maxOccur?: number;
  isChoice?: boolean;
  choiceMaxOccur?: number;
  choiceMinOccur?: number;
  options: NodeRules;
}
