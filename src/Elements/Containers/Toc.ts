import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Corereq } from '../../AttributeGroups/Corereq';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

export class Toc extends AbstractNode {
  public abbreviation = 'toc';

  public readonly CHILDREN_MAP: NodeRules = {
    tocSeq: {
      minOccur: 1,
      options: {
        tocItem: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
  ];

  public getNodeName(): string {
    return 'toc';
  }
}
