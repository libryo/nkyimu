import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Source } from '../../AttributeGroups/Source';
import { Xmllang } from '../../AttributeGroups/Xmllang';

export class Notes extends AbstractNode {
  public abbreviation = 'notes';

  public readonly CHILDREN_MAP: NodeRules = {
    note: { minOccur: 1, options: {} },
  };

  public readonly SEQUENCE: string[] = [
    'note',
  ];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items,
    ...(new Xmllang()).items,
  ];

  public getNodeName(): string {
    return 'notes';
  }
}
