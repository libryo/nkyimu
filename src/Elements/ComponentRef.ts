import { AbstractNode } from '../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../Interfaces/AttributeGroupItem';
import { NodeRules } from '../Interfaces/NodeRules';
import { SrcType } from '../ComplexTypes/SrcType';

const type = new SrcType();

/**
 * The element componentRef is a reference to a separate manifestation-level
 * resource that holds the content of the component of the document not
 * physically placed at the position specified. Actual resources can either
 * be external (e.g. in the package or even in a different position) or
 * internal (within the components element)
 */
export class ComponentRef extends AbstractNode {
  public abbreviation = 'cref';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'componentRef';
  }
}
