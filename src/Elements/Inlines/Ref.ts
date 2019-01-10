import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Link } from '../../AttributeGroups/Link';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inlinereq } from '../../ComplexTypes/Inlinereq';

const type = new Inlinereq();

/**
 * The element ref is an inline element containing a legal reference
 */
export class Ref extends AbstractNode {
  public abbreviation = 'ref';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Link()).items,
  ];

  public getNodeName(): string {
    return 'ref';
  }
}
