import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

export class Meta extends AbstractNode {
  public abbreviation = 'meta';

  public readonly CHILDREN_MAP: NodeRules = {
    identification: { maxOccur: 1, minOccur: 1, options: {} },
    publication: { minOccur: 0, maxOccur: 1, options: {} },
    classification: { minOccur: 0, options: {} },
    lifecycle: { minOccur: 0, options: {} },
    workflow: { minOccur: 0, options: {} },
    analysis: { minOccur: 0, options: {} },
    temporalData: { minOccur: 0, options: {} },
    references: { minOccur: 0, options: {} },
    notes: { minOccur: 0, options: {} },
    proprietary: { minOccur: 0, options: {} },
    presentation: { minOccur: 0, options: {} },
  };

  public readonly SEQUENCE: string[] = [
    'identification',
    'publication:?',
    'classification:?',
    'lifecycle:?',
    'workflow:?',
    'analysis:?',
    'temporalData:?',
    'references:?',
    'notes:?',
    'proprietary:?',
    'presentation:?',
  ];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];

  public getNodeName(): string {
    return 'meta';
  }
}
