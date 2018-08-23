import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Coreopt } from "../../AttributeGroups";

export class Tr extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'tr'; }

  readonly CHILDREN_MAP: NodeRules = {
    trChoice: {
      choice: true,
      minOccur: 1,
      options: {
        th: { minOccur: 1, maxOccur: 1, options: {} },
        td: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items,
  ];
}
