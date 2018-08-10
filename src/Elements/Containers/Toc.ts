import { AbstractNode } from "../../Abstract/AbstractNode";
import { Corereq } from "../../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Toc extends AbstractNode {
  abbreviation = '';

  nodeName = 'toc';

  readonly CHILDREN_MAP: NodeRules = {
    sequence: {
      minOccur: 1,
      options: {
        tocItem: { minOccur: 1, options: {} },
      }
    }
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
  ];
}
