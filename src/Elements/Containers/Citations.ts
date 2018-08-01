import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { CitationHierarchy } from "../ComplexTypes/CitationHierarchy";

/**
 * The element container is a generic element for a container.
 */
export class Citations extends AbstractNode {
  abbreviation = '';

  nodeName = 'citations';

  readonly CHILDREN_MAP: NodeRules = (new CitationHierarchy()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
