import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Basicopt } from '../../ComplexTypes/Basicopt';

const type = new Basicopt();

/**
 * The element coverPage is used as a container of the text
 * that acts as a cover page
 */
export class CoverPage extends AbstractNode {
  public abbreviation = 'coverpage';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'coverPage';
  }
}
