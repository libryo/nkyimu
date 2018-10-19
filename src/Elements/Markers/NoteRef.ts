import { AbstractNode } from "../../Abstracts/AbstractNode";
import { Link } from "../../AttributeGroups/Link";
import { Notes } from "../../AttributeGroups/Notes";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Markeropt } from "../../ComplexTypes/Markeropt";

const type = new Markeropt();

/**
 * The element noteRef is a reference to a editorial note
 * placed in the notes metadata section
 */
export class NoteRef extends AbstractNode {
  abbreviation = 'noteref';

  getNodeName(): string { return 'noteRef'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Notes()).items,
    ...(new Link()).items,
  ];
}
