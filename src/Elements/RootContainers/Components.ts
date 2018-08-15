import { AbstractNode } from "../../Abstract/AbstractNode";
import { Idreq } from "../../AttributeGroups/Idreq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Components extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'components'; }

  readonly CHILDREN_MAP: NodeRules = {
    component: { options: {} },
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Idreq()).items,
  ];
}