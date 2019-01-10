import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Optvalue } from '../../AttributeGroups/Optvalue';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * the element legislature is an inline element within preface
 * to identify the string used by the document for the
 * legislature relative to the document. Use #refersTo to a
 * TLCEvent to refer to the event of the specific legislature.
 */
export class Legislature extends AbstractNode {
  public abbreviation = 'legislature';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Optvalue()).items,
  ];

  public getNodeName(): string {
    return 'legislature';
  }
}
