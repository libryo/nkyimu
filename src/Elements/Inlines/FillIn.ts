import { AbstractNode } from '../../Abstracts/AbstractNode';
import { FillInWidth } from '../../AttributeGroups/FillInWidth';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * The element fillIn is an inline element shown as a dotted
 * line or any other typoaphical characteristics to represent
 * a fill-in element in a printed form, that is as ane example
 * of an actual form. It is NOT meant to be used for form
 * elements as in HTML, i.e. as a way to collect input from
 * the reader and deliver to some server-side process.
 */
export class FillIn extends AbstractNode {
  public abbreviation = 'fillin';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new FillInWidth()).items,
  ];

  public getNodeName(): string {
    return 'fillIn';
  }
}
