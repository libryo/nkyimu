import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Preambleopt } from '../../ComplexTypes/Preambleopt';

const type = new Preambleopt();

/**
 * The element preamble is used as a container of the text that opens
 * the main body of the document as a preamble
 */
export class Preamble extends AbstractNode {
  public abbreviation = 'preamble';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'preamble';
  }
}
