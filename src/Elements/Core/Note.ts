import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { SubFlowStructure } from "../../ComplexTypes/SubFlowStructure";
import { Notes } from "../../AttributeGroups/Notes";

const type = new SubFlowStructure();

/**
 * The element note is a metadata element containing the text of the footnote and
 * endnote specified.
 */
export class Note extends AbstractNode {
  abbreviation = 'note';

  getNodeName(): string { return 'note'; }

  readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Notes()).items,
  ];
}