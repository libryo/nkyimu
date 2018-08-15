import { AbstractNode } from "../../Abstract/AbstractNode";
import { Corereq } from "../../AttributeGroups/Corereq";
import { TableAtts } from "../../AttributeGroups/TableAtts";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The element ol is an HTML element and is used in Akoma Ntoso
 * as in HTML, for an ordered list of list item (elements li)
 */
export class Table extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'table'; }

  readonly CHILDREN_MAP: NodeRules = {
    tblSeq: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        caption: { minOccur: 0, maxOccur: 1, options: {} },
        tr: { minOccur: 1, options: {} },
      },
    },
  };

  readonly SEQUENCE: string[] = [
    'caption:?',
    'tr',
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
    ...(new TableAtts()).items,
  ];
}
