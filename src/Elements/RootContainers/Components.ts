import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Idreq } from '../../AttributeGroups/Idreq';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

export class Components extends AbstractNode {
  public abbreviation = 'cmpnts';

  public readonly CHILDREN_MAP: NodeRules = {
    component: { minOccur: 1, options: {} },
  };

  public readonly SEQUENCE: string[] = [
    'component',
  ];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Idreq()).items,
  ];

  public getNodeName(): string {
    return 'components';
  }
}
