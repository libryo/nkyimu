import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element docketNumber is an inline element within preface
 * to identify the string used by the document for the number
 * of the docket, case, file, etc which the document belongs to
 */
export class DocketNumber extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'docketNumber'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
