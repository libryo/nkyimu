import { AbstractNode } from "../../Abstracts/AbstractNode";
import { XMLDateNamespaceAttribute } from "../../Attributes/XMLDateNamespaceAttribute";
import { XMLNamespaceAttribute } from "../../Attributes/XMLNamespaceAttribute";
import { XMLXSINamespaceAttribute } from "../../Attributes/XMLXSINamespaceAttribute";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { AkomaNtosoType } from "../../ComplexTypes/AkomaNtosoType";
import { Note } from "../Core/Note";
import { NoteRef } from "../Markers/NoteRef";
import { HrefAttribute, EIdAttribute, SourceAttribute } from "../../Attributes";
import { References } from "../Core/References";
import { Meta } from "../RootContainers/Meta";
import { Notes } from "../Core/Notes";

const aknType = new AkomaNtosoType();

export class AKNDocument extends AbstractNode {
  abbreviation = 'akomantoso';

  readonly CHILDREN_MAP: NodeRules = aknType.CHILDREN_MAP;

  readonly SEQUENCE: string[] = aknType.SEQUENCE;

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...aknType.ATTRIBUTE_GROUPS,
  ];

  private notes: Note[] = [];

  private references: AbstractNode[] = [];

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

    this.updateMetaItems();

    const serializer = new XMLSerializer();

    doc.appendChild(this.getNode());

    return serializer.serializeToString(doc);
  }

  private updateMetaItems() {
    if (this.notes.length < 1 && this.references.length < 1) return;

    const meta = this.getFirstDescendant((new Meta()).getNodeName());

    if (!meta) return;

    if (this.references.length > 0) {
      const references = this.getReferences(meta);

      this.references.forEach((item) => {
        references.appendChild(item);
      });

      meta.appendChild(references);
    }

    if (this.notes.length > 0) {
      const notes = this.getNotes(meta);

      this.notes.forEach((item) => {
        notes.appendChild(item);
      });

      meta.appendChild(notes);
    }
  }

  /**
   * Get the references element.
   *
   * @param meta Meta
   */
  private getReferences(meta: Meta): References {
    const referencesName = (new References()).getNodeName();

    const references = meta.children
      .filter(e => e.getNodeName() === referencesName);

    if (references.length < 1) {
      const ref = new References();

      ref.setAttribute(new EIdAttribute('references'));
      ref.setAttribute(new SourceAttribute('#source'));

      return ref;
    }

    return references[0];
  }

  /**
   * Get the notes element.
   *
   * @param meta Meta
   */
  private getNotes(meta: Meta): Notes {
    const notesName = (new Notes()).getNodeName();
    const notes = meta.children
      .filter(e => e.getNodeName() === notesName);

    if (notes.length < 1) {
      const not = new Notes();
      not.setAttribute(new SourceAttribute('#source'));

      return not;
    }

    return notes[0];
  }

  /**
   * Add a new note to the body and receive a NoteRef in return.
   *
   * @param note Note
   *
   * @return NoteRef
   */
  addNote(note: Note): NoteRef {
    const noteId = `${note.abbreviation}_${this.notes.length + 1}`;

    note.setElementId(noteId);

    this.notes.push(note);

    const ref = new NoteRef();

    ref.setAttribute(new HrefAttribute(`#${noteId}`));

    return ref;
  }

  /**
   * Add a reference to the document.
   *
   * @param node Node
   */
  addReference(node: AbstractNode) {
    this.references.push(node);
  }
}
