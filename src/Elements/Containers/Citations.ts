import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { CitationHierarchy } from '../../ComplexTypes/CitationHierarchy';

const type = new CitationHierarchy();

/**
 * The element container is a generic element for a container.
 */
export class Citations extends AbstractNode {
  public abbreviation = 'cits';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'citations';
  }
}
