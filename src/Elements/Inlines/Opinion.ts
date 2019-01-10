import { AbstractNode } from '../../Abstracts/AbstractNode';
import { OpinionType } from '../../AttributeGroups/OpinionType';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * The element opinion is an inline element to identify where
 * the document defines the opinion of an actor
 */
export class Opinion extends AbstractNode {
  public abbreviation = 'opinion';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new OpinionType()).items,
  ];

  public getNodeName(): string {
    return 'opinion';
  }
}
