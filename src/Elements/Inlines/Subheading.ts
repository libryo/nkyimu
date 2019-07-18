import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inlinereq } from '../../ComplexTypes/Inlinereq';
import { EIdAttribute } from '../../Attributes';

const type = new Inlinereq();

/**
 * The element subheading is a heading element in a hierarchy that
 * contains a subtitle or any other textual content to further
 * describe the structure.
 */
export class Subheading extends AbstractNode {
  public abbreviation = 'subheading';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    { attribute: EIdAttribute, required: false },
  ];

  public getNodeName(): string {
    return 'subheading';
  }
}
