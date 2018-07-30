import { NodeRules } from "../Interfaces/NodeRules";

export abstract class AbstractChildMap {
  abstract allowedChildren: string[];
  abstract childrenMap: NodeRules;
  abstract sequence?: string[];
}