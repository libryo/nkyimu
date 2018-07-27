import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";
import { XMLXSINamespaceAttribute } from "../../Attributes/XMLXSINamespaceAttribute";
import { XMLDateNamespaceAttribute } from "../../Attributes/XMLDateNamespaceAttribute";
import { XMLNamespaceAttribute } from "../../Attributes/XMLNamespaceAttribute";

export class AKNDocument extends AbstractNode {
  private doc: Document;

  nodeType: NodeType = NodeType.ELEMENT_NODE;

  abbreviation = '';

  nodeName = 'akomaNtoso';

  protected nodeRx: RegExp = new RegExp('<(amendmentList|officialGazette|documentCollection|act|bill|debateReport|debate|statement|amendment|judgment|portion|doc)>');

  constructor() {
    super();
    this.doc = new Document();
    this.setRootAttributes();
  }

  setRootAttributes() {
    this.setAttribute(new XMLNamespaceAttribute('http://docs.oasis-open.org/legaldocml/ns/akn/3.0'));
    this.setAttribute(new XMLXSINamespaceAttribute('http://www.w3.org/2001/XMLSchema-instance'));
    this.setAttribute(new XMLDateNamespaceAttribute('http://exslt.org/dates-and-times'));
  }

  /**
   * Get the generated document.
   * 
   * @returns Document
   */
  getDocument(): Document {
    return this.doc;
  }

  /**
   * Serialize the document to xml string
   * 
   * @returns string
   */
  toXML(): string {
    const serializer = new XMLSerializer();

    this.doc.appendChild(super.toXml(this.doc));

    return serializer.serializeToString(this.doc);
  }
}
