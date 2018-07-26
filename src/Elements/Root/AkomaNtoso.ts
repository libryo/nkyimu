import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";

export class AkomaNtoso extends AbstractNode {
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'akomaNtoso';

  protected nodeRx: RegExp = new RegExp('<(amendmentList|officialGazette|documentCollection|act|bill|debateReport|debate|statement|amendment|judgment|portion|doc)>');

  constructor() {
    super();
    this.setAttributes();
  }

  setAttributes() {
    this.attributes['xmlns'] = 'http://docs.oasis-open.org/legaldocml/ns/akn/3.0';
    this.attributes['xmlns:xsi'] = 'http://www.w3.org/2001/XMLSchema-instance';
    this.attributes['xmlns:date'] = 'http://exslt.org/dates-and-times';
  }
}
