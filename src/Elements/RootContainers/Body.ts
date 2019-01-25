import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { BodyType } from '../../ComplexTypes/BodyType';
import { EIdAttribute } from '../../Attributes';

const type = new BodyType();

/**
 * The element body is the container of the main hierarchy of a hierarchical
 * document (e.g, an act or a bill)
 */
export class Body extends AbstractNode {
  public abbreviation = 'body';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = type.SEQUENCE;

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    { attribute: EIdAttribute, required: true },
  ];

  public getNodeName(): string {
    return 'body';
  }

  /**
   * Validate whether the element's eid has count.
   */
  public hasCount(): boolean {
    return false;
  }

  /**
   * Validate whether the element's eid has count.
   */
  public prefixesEId(): boolean {
    return false;
  }
}
