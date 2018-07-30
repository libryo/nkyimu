import { NodeRules } from "./NodeRules";

export interface HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules;
  readonly SEQUENCE?: string[];
}
