import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Core, Idreq } from '../../AttributeGroups';

export class TemporalGroup extends AbstractNode {
  abbreviation = 'tmpg';

  getNodeName(): string {
    return 'temporalGroup';
  }

  readonly CHILDREN_MAP: NodeRules = {
    timeInterval: { minOccur: 0, options: {}, }
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new Idreq()).items,
  ];
}
