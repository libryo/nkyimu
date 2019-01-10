import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Blocksopt } from '../../ComplexTypes';
import { Cellattrs } from '../../AttributeGroups';

const type = new Blocksopt();

/**
 * The element td is an HTML element and is used in Akoma Ntoso as in HTML, for a
 * data cell of a table
 */
export class Td extends AbstractNode {
  public abbreviation = 'td';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Cellattrs()).items,
  ];

  public getNodeName(): string {
    return 'td';
  }
}
