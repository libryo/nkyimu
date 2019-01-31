import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Name } from '../../AttributeGroups';
import { Hierarchy } from '../../ComplexTypes/Hierarchy';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

const type = new Hierarchy();

/**
 * this element is a hierarchical container called
 * "hcontainer" either explicitly or due to the local tradition
 */
export class Hcontainer extends AbstractNode {
  public abbreviation = 'hcontainer';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];

  public getNodeName(): string {
    return 'hcontainer';
  }
}
