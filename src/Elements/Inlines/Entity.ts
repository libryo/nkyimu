import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Name } from '../../AttributeGroups/Name';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inlinereqreq } from '../../ComplexTypes/Inlinereqreq';

const type = new Inlinereqreq();

/**
 * The element entity is a generic inline element to identify
 * a text fragment introducing or referring to a concept in
 * the ontology
 */
export class Entity extends AbstractNode {
  public abbreviation = 'entity';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];

  public getNodeName(): string {
    return 'entity';
  }
}
