import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The element attachment is used as a container of individual
 * attachment elements.
 */
export class Attachment extends AbstractNode {
  abbreviation = '';

  nodeName = 'attachment';

  protected nodeRx: RegExp = new RegExp('');

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
    'coverPage',
    'preface',
    'preamble',
    'body',
    'conclusions',
    'attachments',
    'components'
  ];

}