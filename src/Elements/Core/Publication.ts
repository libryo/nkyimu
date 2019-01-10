import { AbstractNode } from '../../Abstracts/AbstractNode';
import {
  Date as DateGroup, Name, Number as NumberGroup, Refers, Show,
} from '../../AttributeGroups';
import { Metaopt } from '../../ComplexTypes';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

const type = new Metaopt();
/**
 * The element publication is the metadata container specifying an official
 * publication event for the FRBR expression of the document.
 */
export class Publication extends AbstractNode {
  public abbreviation = 'publication';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new DateGroup()).items,
    ...(new Show()).items,
    ...(new Name()).items,
    ...(new NumberGroup()).items,
    ...(new Refers()).items,
  ];

  public getNodeName(): string {
    return 'publication';
  }
}
