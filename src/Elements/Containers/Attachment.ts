import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { DocContainerType } from '../../ComplexTypes/DocContainerType';

const type = new DocContainerType();

/**
 * The element attachment is used as a container of individual
 * attachment elements
 */
export class Attachment extends AbstractNode {
  public abbreviation = 'att';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'attachment';
  }
}
