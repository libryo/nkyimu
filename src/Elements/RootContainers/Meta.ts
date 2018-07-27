import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";

export class Meta extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'meta';

  protected nodeRx: RegExp = new RegExp('');
}