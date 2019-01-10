import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Role } from '../../AttributeGroups/Role';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * The element docProponent is an inline element within preface
 * to identify the string used by the document for its proponent
 */
export class DocProponent extends AbstractNode {
  public abbreviation = 'docproponent';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Role()).items,
  ];

  public getNodeName(): string {
    return 'docProponent';
  }
}
