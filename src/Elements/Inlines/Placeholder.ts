import { AbstractNode } from "../../Abstract/AbstractNode";
import { OriginalText } from "../../AttributeGroups/OriginalText";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

const type = new Inline();

/**
 * the element placeholder is an inline element containing the text of a
 * computable expression (e.g., '30 days after the publication of this act')
 * that can be replaced editorially with an actual value
 */
export class Placeholder extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'placeholder'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new OriginalText()).items,
  ];
}
