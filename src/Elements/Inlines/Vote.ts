import { AbstractNode } from '../../Abstracts/AbstractNode';
import { VoteAtts } from '../../AttributeGroups/VoteAtts';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * The element vote is an inline that wraps either the name
 * of the voter (when organized by choice) or the vote
 * (when organized by name) in a voting report.
 */
export class Vote extends AbstractNode {
  public abbreviation = 'vote';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new VoteAtts()).items,
  ];

  public getNodeName(): string {
    return 'vote';
  }
}
