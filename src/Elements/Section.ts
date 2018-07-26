import { AbstractNode } from "../Abstract/AbstractNode";
import { NodeType } from "../enums";

export class Section extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = 'sec';

  nodeName = 'section';
  
  protected nodeRx: RegExp = new RegExp('.+');
}