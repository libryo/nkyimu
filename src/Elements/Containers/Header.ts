import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Blocksopt } from '../../ComplexTypes/Blocksopt';

const type = new Blocksopt();

/**
 * the element header is used as a container of all prefacing material of
 * judgments (e.g. headers, formulas, etc.)
 */
export class Header extends AbstractNode {
  public abbreviation = 'header';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'header';
  }
}
