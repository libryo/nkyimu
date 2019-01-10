import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

export class Attachments extends AbstractNode {
  public abbreviation = 'attachments';

  public readonly CHILDREN_MAP: NodeRules = {
    attachment: { minOccur: 1, options: {} },
  };

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];

  public getNodeName(): string {
    return 'attachments';
  }
}
