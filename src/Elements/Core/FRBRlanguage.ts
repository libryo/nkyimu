import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Metaopt } from "../ComplexTypes/Metaopt";
import { Language } from "../../AttributeGroups/Language";

const type = new Metaopt();

/**
 * The element FRBRlanguage is the metadata property containing a RFC4646
 * (three-letter code) of the main human language used in the content of this expression
 */
export class FRBRlanguage extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'FRBRlanguage'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Language()).items,
  ];
}