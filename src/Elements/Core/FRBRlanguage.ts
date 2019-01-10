import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Metaopt } from '../../ComplexTypes/Metaopt';
import { Language } from '../../AttributeGroups/Language';

const type = new Metaopt();

/**
 * The element FRBRlanguage is the metadata property containing a RFC4646
 * (three-letter code) of the main human language used in the content of this expression
 */
export class FRBRlanguage extends AbstractNode {
  public abbreviation = 'frbrlanguage';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Language()).items,
  ];

  public getNodeName(): string {
    return 'FRBRlanguage';
  }
}
