import { AbstractNode } from "../../Abstract/AbstractNode";
import { XMLDateNamespaceAttribute } from "../../Attributes/XMLDateNamespaceAttribute";
import { XMLNamespaceAttribute } from "../../Attributes/XMLNamespaceAttribute";
import { XMLXSINamespaceAttribute } from "../../Attributes/XMLXSINamespaceAttribute";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { AkomaNtosoType } from "../ComplexTypes/AkomaNtosoType";

const aknType = new AkomaNtosoType();

export class AKNDocument extends AbstractNode {
  private doc: Document;

  abbreviation = '';

  nodeName = 'akomaNtoso';

  readonly CHILDREN_MAP: NodeRules = {
    ...aknType.CHILDREN_MAP
  };

  readonly SEQUENCE: string[] = [
    ...aknType.SEQUENCE,
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...aknType.ATTRIBUTE_GROUPS,
  ];

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
