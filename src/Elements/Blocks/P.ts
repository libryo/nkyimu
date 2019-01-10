import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Inline } from '../../ComplexTypes/Inline';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

const type = new Inline();

/**
 * The element p is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the generic paragraph of text (a block)
 */
export class P extends AbstractNode {
  public abbreviation = 'p';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'p';
  }
}
