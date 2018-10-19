import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Metaopt } from "../../ComplexTypes";
import { Date as DateGroup, Show, Name, Number as NumberGroup, Refers } from "../../AttributeGroups";

const type = new Metaopt();
/**
 * The element publication is the metadata container specifying an official
 * publication event for the FRBR expression of the document.
 */
export class Publication extends AbstractNode {
  abbreviation = 'publication';

  getNodeName(): string { return 'publication'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new DateGroup()).items,
    ...(new Show()).items,
    ...(new Name()).items,
    ...(new NumberGroup()).items,
    ...(new Refers()).items,
  ];
}