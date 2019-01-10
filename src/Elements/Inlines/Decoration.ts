import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * The element decoration is an inline element to represent
 * a decorative aspect that is present in the orignal text
 * and that is meant as additional information to the text
 * (e.g., the annotation 'new' on the side of a freshly
 * inserted structure.
 */
export class Decoration extends AbstractNode {
  public abbreviation = 'decoration';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'decoration';
  }
}
