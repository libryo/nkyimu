import { AbstractNode } from '../../Abstracts/AbstractNode';
import {
  Agent, Authoritative, FromLanguage, Link, Pivot,
} from '../../AttributeGroups';
import { Metaopt } from '../../ComplexTypes';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

const type = new Metaopt();

/**
 * The element FRBRtranslation is the metadata property specifying the source
 * of which this expression is a translation of.
 */
export class FRBRtranslation extends AbstractNode {
  public abbreviation = 'frbrtranslation';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Link()).items,
    ...(new FromLanguage()).items,
    ...(new Authoritative()).items,
    ...(new Pivot()).items,
    ...(new Agent()).items,
  ];

  public getNodeName(): string {
    return 'FRBRtranslation';
  }
}
