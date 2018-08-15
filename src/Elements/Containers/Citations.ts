import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { CitationHierarchy } from "../ComplexTypes/CitationHierarchy";

const type = new CitationHierarchy();

/**
 * The element container is a generic element for a container.
 */
export class Citations extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'citations'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
