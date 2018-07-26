import { AkomaNtoso } from "./AkomaNtoso";

export class AKNDocument {
  private doc: Document;
  
  constructor(rootNode: AkomaNtoso) {
    this.doc = new Document();
    this.doc.appendChild(rootNode.toXml(this.doc));
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

    return serializer.serializeToString(this.doc);
  }
}
