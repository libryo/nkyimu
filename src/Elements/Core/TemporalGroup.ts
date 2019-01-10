import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Core, Idreq } from '../../AttributeGroups';

export class TemporalGroup extends AbstractNode {
  public abbreviation = 'tmpg';

  public readonly CHILDREN_MAP: NodeRules = {
    timeInterval: { minOccur: 0, options: {} },
  };

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new Idreq()).items,
  ];

  public getNodeName(): string {
    return 'temporalGroup';
  }
}
