import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { RecitalHierarchy } from '../../ComplexTypes/RecitalHierarchy';

const type = new RecitalHierarchy();
/**
 * The element recitals is the section of the preamble that contains recitals.
 */
export class Recitals extends AbstractNode {
  public abbreviation = 'recs';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'recitals';
  }
}
