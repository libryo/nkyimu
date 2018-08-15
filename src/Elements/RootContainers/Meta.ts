import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Meta extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'meta'; }

  readonly CHILDREN_MAP: NodeRules = {
    identification: { maxOccur: 1, minOccur: 1, options: {} },
    publication: { maxOccur: 1, options: {} },
    classification: { options: {} },
    lifecycle: { options: {} },
    workflow: { options: {} },
    analysis: { options: {} },
    temporalData: { options: {} },
    references: { options: {} },
    notes: { options: {} },
    proprietary: { options: {} },
    presentation: { options: {} },
  };

  readonly SEQUENCE: string[] = [
    'identification',
    'publication',
    'classification',
    'lifecycle',
    'workflow',
    'analysis',
    'temporalData',
    'references',
    'notes',
    'proprietary',
    'presentation',
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];
}
