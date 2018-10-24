import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Source } from '../../AttributeGroups/Source';

export class Lifecycle extends AbstractNode {
  abbreviation = 'lifecycle';

  getNodeName(): string {
    return 'lifecycle';
  }

  readonly CHILDREN_MAP: NodeRules = {
    eventRef: { minOccur: 0, options: {}, }
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items,
  ];
}
