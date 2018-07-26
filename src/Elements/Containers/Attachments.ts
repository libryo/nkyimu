import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";
import { Container } from "../../Interfaces/Container";

export class Attachments extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'attachments';

  protected nodeRx: RegExp = new RegExp('');
}