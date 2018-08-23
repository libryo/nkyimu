import { NodeRules } from "./NodeRules";

export interface Rule {
  choice?: boolean;
  minOccur?: number;
  maxOccur?: number;
  isChoice?: boolean;
  options: NodeRules;
  parentRule?: Rule;
}
