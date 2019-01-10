import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Name } from '../../AttributeGroups/Name';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { SubFlowStructure } from '../../ComplexTypes/SubFlowStructure';

const type = new SubFlowStructure();

/**
 * The element subFlow is a generic element for a subFlow.
 */
export class SubFlow extends AbstractNode {
  public abbreviation = 'subflow';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];

  public getNodeName(): string {
    return 'subFlow';
  }
}
