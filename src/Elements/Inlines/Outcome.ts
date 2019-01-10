import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * The element outcome is an inline that wraps the outcome of a vote
 */
export class Outcome extends AbstractNode {
  public abbreviation = 'outcome';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'outcome';
  }
}
