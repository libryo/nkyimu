import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Linkopt } from '../../AttributeGroups/Linkopt';
import { Quote } from '../../AttributeGroups/Quote';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * the element embeddedText is an inline element containing
 * a string used as an extract from another document. Attribute
 * quote is used to specify the quote character used in the
 * original; no quote attribute implies that the quote is left
 * in the text; quote="" implies that there is no quote character.
 */
export class EmbeddedText extends AbstractNode {
  public abbreviation = 'embeddedtext';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Quote()).items,
    ...(new Linkopt()).items,
  ];

  public getNodeName(): string {
    return 'embeddedText';
  }
}
