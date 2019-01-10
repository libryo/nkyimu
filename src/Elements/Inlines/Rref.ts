import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Range } from '../../AttributeGroups/Range';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inlinereq } from '../../ComplexTypes/Inlinereq';

const type = new Inlinereq();

/**
 * The element rref is an inline element containing a range
 * of references between the IRI specified in the from attribute
 * and the one specified in the upTo attribute.
 */
export class Rref extends AbstractNode {
  public abbreviation = 'rref';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Range()).items,
  ];

  public getNodeName(): string {
    return 'rref';
  }
}
