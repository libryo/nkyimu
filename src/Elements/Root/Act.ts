import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";

export class Act extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'act';

  protected nodeRx: RegExp = new RegExp('<meta>(<coverPage>)?(<preface>)?(<preamble>)?<body>(<conclusions>)?(<attachments>)?(<components>)?');
}
