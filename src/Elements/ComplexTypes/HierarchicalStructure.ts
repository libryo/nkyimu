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
    coverPage: { maxOccur: 1, options: {} },
    preface: { maxOccur: 1, options: {} },
    preamble: { maxOccur: 1, options: {} },
    body: { maxOccur: 1, minOccur: 1, options: {} },
    conclusions: { maxOccur: 1, options: {} },
    attachments: { maxOccur: 1, options: {} },
    components: { maxOccur: 1, options: {} },
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

  static getRegExp(): RegExp {
    return /<meta>(<coverPage>)?(<preface>)?(<preamble>)?<body>(<conclusions>)?(<attachments>)?(<components>)?/;
  }
}
