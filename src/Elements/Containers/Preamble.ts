import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";

export class Preamble extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'preamble';

  protected nodeRx: RegExp = new RegExp('');
}