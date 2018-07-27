import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";

export class Preface extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'preface';

  protected nodeRx: RegExp = new RegExp('');
}