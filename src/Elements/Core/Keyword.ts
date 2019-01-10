import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Dictionary, Linkopt, Refers, Show, Value } from '../../AttributeGroups';
import { Metaopt } from '../../ComplexTypes';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

const type = new Metaopt();
/**
 * The element keyword is a metadata element specifying a keyword  associated
 * to the FRBR expression of the document. Attribute dictionary (required)
 * specifies the thesaurus out of which the keyword has been taken. Attribute
 * href points to the fragment of text this keyword is associated to. Keywords
 * without href attribute refer to the content as a whole.
 */
export class Keyword extends AbstractNode {
  public abbreviation = 'keyword';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Linkopt()).items,
    ...(new Value()).items,
    ...(new Show()).items,
    ...(new Refers()).items,
    ...(new Dictionary()).items,
  ];

  public getNodeName(): string {
    return 'keyword';
  }
}
