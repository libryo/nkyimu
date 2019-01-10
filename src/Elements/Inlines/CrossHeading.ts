import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inlinereq } from '../../ComplexTypes/Inlinereq';

const type = new Inlinereq();

/**
 * The element crossHeading is a heading element that is placed side
 * by side with hierarchical containers.
 */
export class CrossHeading extends AbstractNode {
  public abbreviation = 'crossheading';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'crossHeading';
  }
}
