import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Notes } from '../../AttributeGroups/Notes';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { SubFlowStructure } from '../../ComplexTypes/SubFlowStructure';

const type = new SubFlowStructure();

/**
 * The element authorialNote is a subFlow element containing
 * an authorial (non-editorial) note in the main flow of the text.
 */
export class AuthorialNote extends AbstractNode {
  public abbreviation = 'authorialnote';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Notes()).items,
  ];

  public getNodeName(): string {
    return 'authorialNote';
  }
}
