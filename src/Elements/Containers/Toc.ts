import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Toc extends AbstractNode {
  abbreviation = '';

  nodeName = 'toc';

  readonly CHILDREN_MAP: NodeRules = {
    sequence: {
      minOccur: 1,
      options: {
        tocItem: { minOccur: 1, options: {} },
      }
    }
  };

  readonly SEQUENCE: string[] = [];
}
