import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Source } from '../../AttributeGroups';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

export class Classification extends AbstractNode {
  public abbreviation = 'classification';

  public readonly CHILDREN_MAP: NodeRules = {
    keyword: { minOccur: 1, options: {} },
  };

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items,
  ];

  public getNodeName(): string {
    return 'classification';
  }
}
