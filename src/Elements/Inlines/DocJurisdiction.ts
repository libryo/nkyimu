import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element docJurisdiction is an inline element within
 * preface to identify the string used by the document
 * detailing the jurisdiction of the document
 */
export class DocJurisdiction extends AbstractNode {
  abbreviation = 'docjurisdiction';

  getNodeName(): string { return 'docJurisdiction'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
