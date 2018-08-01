import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ItemType } from "../ComplexTypes/ItemType";

/**
 * The element tblock (titled block) is used to specify a container
 * for blocks introduced by heading elements, similarly to a
 * hierarchical structure
 */
export class Tblock extends AbstractNode {
  abbreviation = 'tbl';

  nodeName = 'tblock';

  readonly CHILDREN_MAP: NodeRules = (new ItemType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
