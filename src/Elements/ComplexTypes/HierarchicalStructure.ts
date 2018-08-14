import { Contains } from "../../AttributeGroups/Contains";
import { Name } from "../../AttributeGroups/Name";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * the type hierarchicalStructure specifies the overall content model
 * of the document types that are hierarchical in nature, especially
 * acts and bills.
 */
export class HierarchicalStructure implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {
    meta: { maxOccur: 1, minOccur: 1, options: {} },
    coverPage: { minOccur: 0, maxOccur: 1, options: {} },
    preface: { minOccur: 0, maxOccur: 1, options: {} },
    preamble: { minOccur: 0, maxOccur: 1, options: {} },
    body: { minOccur: 1, maxOccur: 1, options: {} },
    conclusions: { minOccur: 0, maxOccur: 1, options: {} },
    attachments: { minOccur: 0, maxOccur: 1, options: {} },
    components: { minOccur: 0, maxOccur: 1, options: {} },
  };

  readonly SEQUENCE: string[] = [
    'meta',
    'coverPage:?',
    'preface:?',
    'preamble:?',
    'body',
    'conclusions:?',
    'attachments:?',
    'components:?'
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Name()).items,
    ...(new Contains()).items,
  ];
}
