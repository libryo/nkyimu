import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Corereq } from '../../AttributeGroups/Corereq';
import { TableAtts } from '../../AttributeGroups/TableAtts';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

export class Table extends AbstractNode {
  public abbreviation = 'table';

  public readonly CHILDREN_MAP: NodeRules = {
    tblSeq: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        caption: { minOccur: 0, maxOccur: 1, options: {} },
        tr: { minOccur: 1, options: {} },
      },
    },
  };

  public readonly SEQUENCE: string[] = [
    'caption:?',
    'tr',
  ];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
    ...(new TableAtts()).items,
  ];

  public getNodeName(): string {
    return 'table';
  }
}
