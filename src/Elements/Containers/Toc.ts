import { AbstractNode } from "../../Abstracts/AbstractNode";
import { Corereq } from "../../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Toc extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'toc'; }

  readonly CHILDREN_MAP: NodeRules = {
    tocSeq: {
      minOccur: 1,
      options: {
        tocItem: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
  ];
}
