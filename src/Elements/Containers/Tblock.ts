import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ItemType } from '../../ComplexTypes/ItemType';

const type = new ItemType();
/**
 * The element tblock (titled block) is used to specify a container
 * for blocks introduced by heading elements, similarly to a
 * hierarchical structure
 */
export class Tblock extends AbstractNode {
  public abbreviation = 'tblock';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'tblock';
  }
}
