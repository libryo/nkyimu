import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { BooleanValueType } from '../../ComplexTypes/BooleanValueType';

const type = new BooleanValueType();
/**
 * The element FRBRauthoritative is the metadata property containing a
 * boolean value to determine whether the document contains authoritative
 * text (i.e., content that is the official, authoritative product of an
 * official workflow from an entity that is entrusted with generating an
 * official, authoriative version of the document.
 */
export class FRBRauthoritative extends AbstractNode {
  public abbreviation = 'frbrauthoritative';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;

  public getNodeName(): string {
    return 'FRBRauthoritative';
  }
}
