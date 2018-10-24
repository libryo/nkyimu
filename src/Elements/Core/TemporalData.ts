import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Source } from '../../AttributeGroups/Source';

export class TemporalData extends AbstractNode {
  abbreviation = 'temporalData';

  getNodeName(): string {
    return 'temporalData';
  }

  readonly CHILDREN_MAP: NodeRules = {
    temporalGroup: { minOccur: 0, options: {}, }
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items,
  ];
}
