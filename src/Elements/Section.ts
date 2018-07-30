import { AbstractNode } from "../Abstract/AbstractNode";
import { NodeRules } from "../Interfaces/NodeRules";

export class Section extends AbstractNode {
  abbreviation = 'sec';

  nodeName = 'section';
  
  protected nodeRx: RegExp = new RegExp('.+');


  readonly ALLOWED_CHILDREN: string[] = [
    'meta',
    'coverPage',
    'preface',
    'preamble',
    'body',
    'conclusions',
    'attachments',
    'components'
  ];

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