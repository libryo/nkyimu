import { AbstractNode } from "../../Abstract/AbstractNode";
import { RemarkType } from "../../AttributeGroups/RemarkType";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element remark is an inline element for the specification
 * of editorial remarks (e.g., applauses, laughters, etc.)
 * especially within debate records
 */
export class Remark extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'remark'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new RemarkType()).items,
  ];
}
