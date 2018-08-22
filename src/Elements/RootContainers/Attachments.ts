import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Attachments extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'attachments'; }

  readonly CHILDREN_MAP: NodeRules = {
    attachment: { minOccur: 1, options: {} },
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];
}