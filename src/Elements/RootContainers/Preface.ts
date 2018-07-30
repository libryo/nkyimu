import { AbstractNode } from "../../Abstract/AbstractNode";
import { Prefaceopt } from "../ComplexTypes/Prefaceopt";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The element preface is used as a container of all prefacing
 * material (e.g. headers, formulas, etc.)
 */
export class Preface extends AbstractNode {
  abbreviation = '';

  nodeName = 'preface';

  protected nodeRx: RegExp = Prefaceopt.getRegExp();

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