import { AbstractNode } from '../../Abstracts/AbstractNode';
import { NormalizedAtt } from '../../AttributeGroups/NormalizedAtt';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inlinereqreq } from '../../ComplexTypes/Inlinereqreq';

const type = new Inlinereqreq();

/**
 * The element quantity is an inline element to identify a text
 * fragment introducing or referring to a quantity. This could
 * be a dimensionless number, or a number referring to a length,
 * weight, duration, etc. or even a sum of money. The attribute
 * normalized contains the value normalized in a number, if
 * appropriate.
 */
export class Quantity extends AbstractNode {
  public abbreviation = 'quantity';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new NormalizedAtt()).items,
  ];

  public getNodeName(): string {
    return 'quantity';
  }
}
