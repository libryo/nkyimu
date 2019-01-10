import { AbstractNode } from '../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../Interfaces/AttributeGroupItem';
import { NodeRules } from '../Interfaces/NodeRules';
import { LinkType } from '../ComplexTypes/LinkType';

const type = new LinkType();

/**
 * the element documentRef is a reference to a separate work- or expression-level
 * resource that should be placed in this position. Actual resources are external
 * (e.g. in the package or even in a different position)
 * and are (an expression or any expression of) a separate Work.
 */
export class DocumentRef extends AbstractNode {
  public abbreviation = 'dref';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'documentRef';
  }
}
