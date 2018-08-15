import { AbstractNode } from "../../Abstract/AbstractNode";
import { XMLDateNamespaceAttribute } from "../../Attributes/XMLDateNamespaceAttribute";
import { XMLNamespaceAttribute } from "../../Attributes/XMLNamespaceAttribute";
import { XMLXSINamespaceAttribute } from "../../Attributes/XMLXSINamespaceAttribute";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { AkomaNtosoType } from "../ComplexTypes/AkomaNtosoType";

const aknType = new AkomaNtosoType();

export class AKNDocument extends AbstractNode {
  abbreviation = '';

  readonly CHILDREN_MAP: NodeRules = {
    ...aknType.CHILDREN_MAP
  };

  readonly SEQUENCE: string[] = [
    ...aknType.SEQUENCE,
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...aknType.ATTRIBUTE_GROUPS,
  ];

  getNodeName() {
    return 'akomaNtoso';
  }

  setRootAttributes() {
    this.setAttribute(new XMLNamespaceAttribute('http://docs.oasis-open.org/legaldocml/ns/akn/3.0'));
    this.setAttribute(new XMLXSINamespaceAttribute('http://www.w3.org/2001/XMLSchema-instance'));
    this.setAttribute(new XMLDateNamespaceAttribute('http://exslt.org/dates-and-times'));
  }

  /**
   * Serialize the document to xml string
   *
   * @returns string
   */
  toXML(): string {
    const doc = new Document();
    this.setRootAttributes();

    this.updateGeneratedIds();

    const serializer = new XMLSerializer();

    doc.appendChild(this.getNode());

    return serializer.serializeToString(doc);
  }
}
