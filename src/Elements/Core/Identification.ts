import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Source } from '../../AttributeGroups/Source';


export class Identification extends AbstractNode {
  public abbreviation = 'identification';

  public readonly CHILDREN_MAP: NodeRules = {
    FRBRWork: { minOccur: 1, maxOccur: 1, options: {} },
    FRBRExpression: { minOccur: 1, maxOccur: 1, options: {} },
    FRBRManifestation: { minOccur: 1, maxOccur: 1, options: {} },
    FRBRItem: { minOccur: 0, maxOccur: 1, options: {} },
  };

  public readonly SEQUENCE: string[] = [
    'FRBRWork',
    'FRBRExpression',
    'FRBRManifestation',
    'FRBRItem:?',
  ];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items,
  ];

  public getNodeName(): string {
    return 'identification';
  }
}
