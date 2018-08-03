import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Markeropt } from "../ComplexTypes/Markeropt";

/**
 * The element noteRef is a reference to a editorial note
 * placed in the notes metadata section
 */
export class NoteRef extends AbstractNode {
  abbreviation = '';

  nodeName = 'noteRef';

  readonly CHILDREN_MAP: NodeRules = (new Markeropt()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
