import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Source } from "../../AttributeGroups/Source";


export class Identification extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'identification'; }

  readonly CHILDREN_MAP: NodeRules = {
    FRBRWork: { minOccur:1, maxOccur: 1, options: {} },
    FRBRExpression: { minOccur:1, maxOccur: 1, options: {} },
    FRBRManifestation: { minOccur:1, maxOccur: 1, options: {} },
    FRBRItem: { minOccur:0, maxOccur: 1, options: {} },
  };

  readonly SEQUENCE: string[] = [
    'FRBRWork',
    'FRBRExpression',
    'FRBRManifestation',
    'FRBRItem:?',
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items
  ];
}