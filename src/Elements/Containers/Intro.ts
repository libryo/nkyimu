import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Blocksreq } from '../../ComplexTypes/Blocksreq';

const type = new Blocksreq();

/**
 * The element intro is a heading element in a hierarchy that
 * contains paragraphs introducing one or more lower hierarchical elements.
 */
export class Intro extends AbstractNode {
  public abbreviation = 'intro';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'intro';
  }
}
