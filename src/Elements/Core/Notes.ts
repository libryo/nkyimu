import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Source } from "../../AttributeGroups/Source";
import { Xmllang } from "../../AttributeGroups/Xmllang";

export class Notes extends AbstractNode {
  abbreviation = 'notes';

  getNodeName(): string { return 'notes'; }

  readonly CHILDREN_MAP: NodeRules = {
    note: { minOccur: 1, options: {} },
  };

  readonly SEQUENCE: string[] = [
    'note'
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items,
    ...(new Xmllang()).items,
  ];
}