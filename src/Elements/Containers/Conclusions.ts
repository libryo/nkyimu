import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";

export class Conclusions extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'conclusions';

  protected nodeRx: RegExp = new RegExp('');
}