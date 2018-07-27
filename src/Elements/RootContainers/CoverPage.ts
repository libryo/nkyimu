import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";

export class CoverPage extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'coverPage';

  protected nodeRx: RegExp = new RegExp('');
}