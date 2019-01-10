import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Link } from '../../AttributeGroups/Link';
import { Target } from '../../AttributeGroups/Target';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * The element a is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the generic link to a web resource
 * (NOT to an Akoma Ntoso document: use ref for that).
 * It is an inline.
 */
export class A extends AbstractNode {
  public abbreviation = 'a';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Link()).items,
    ...(new Target()).items,
  ];

  public getNodeName(): string {
    return 'a';
  }
}
