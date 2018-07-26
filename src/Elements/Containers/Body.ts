import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";

export class Body extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'body';

  protected nodeRx: RegExp = new RegExp('');
}