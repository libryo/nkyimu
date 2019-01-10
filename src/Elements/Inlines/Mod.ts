import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ModType } from '../../ComplexTypes/ModType';

const type = new ModType();

/**
 * The element mod is an inline element containing the
 * specification of a modification on another document
 */
export class Mod extends AbstractNode {
  public abbreviation = 'mod';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'mod';
  }
}
