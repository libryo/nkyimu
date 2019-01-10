import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inlinereq } from '../../ComplexTypes/Inlinereq';

const type = new Inlinereq();

/**
 * The element heading is a heading element in a hierarchy that
 * contains a title or any other textual content to describe
 * the structure.
 */
export class Heading extends AbstractNode {
  public abbreviation = 'heading';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'heading';
  }
}
