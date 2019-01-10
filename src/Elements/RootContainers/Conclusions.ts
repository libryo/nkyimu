import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Basicopt } from '../../ComplexTypes/Basicopt';

const type = new Basicopt();
/**
 * The element conclusion is used as a container of all concluding
 * material (e.g. dates, signatures, formulas, etc.)
 */
export class Conclusions extends AbstractNode {
  public abbreviation = 'conclusions';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'conclusions';
  }
}
