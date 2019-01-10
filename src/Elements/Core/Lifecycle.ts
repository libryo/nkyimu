import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Source } from '../../AttributeGroups/Source';

export class Lifecycle extends AbstractNode {
  public abbreviation = 'lifecycle';

  public readonly CHILDREN_MAP: NodeRules = {
    eventRef: { minOccur: 0, options: {} },
  };

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items,
  ];

  public getNodeName(): string {
    return 'lifecycle';
  }
}
