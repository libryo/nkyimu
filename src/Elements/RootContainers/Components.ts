import { AbstractNode } from "../../Abstracts/AbstractNode";
import { Idreq } from "../../AttributeGroups/Idreq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Components extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'components'; }

  readonly CHILDREN_MAP: NodeRules = {
    component: { minOccur: 1, options: {} },
  };

  readonly SEQUENCE: string[] = [
    'component',
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Idreq()).items,
  ];
}