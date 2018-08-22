import { AbstractNode } from "../../Abstracts/AbstractNode";
import { Role } from "../../AttributeGroups/Role";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element docProponent is an inline element within preface
 * to identify the string used by the document for its proponent
 */
export class DocProponent extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'docProponent'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Role()).items,
  ];
}
