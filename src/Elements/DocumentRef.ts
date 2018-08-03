import { AbstractNode } from "../Abstract/AbstractNode";
import { NodeRules } from "../Interfaces/NodeRules";
import { LinkType } from "./ComplexTypes/LinkType";

/**
 * the element documentRef is a reference to a separate work- or expression-level
 * resource that should be placed in this position. Actual resources are external
 * (e.g. in the package or even in a different position)
 * and are (an expression or any expression of) a separate Work.
 */
export class DocumentRef extends AbstractNode {
  abbreviation = '';

  nodeName = 'documentRef';

  readonly CHILDREN_MAP: NodeRules = (new LinkType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

}