import { AbstractNode } from "../Abstract/AbstractNode";
import { NodeRules } from "../Interfaces/NodeRules";
import { ItemType } from "./ComplexTypes/ItemType";

/**
 * The element citation is the individual element of the preface
 * that is called citation
 */
export class Citation extends AbstractNode {
  abbreviation = '';

  nodeName = 'citation';

  readonly CHILDREN_MAP: NodeRules = (new ItemType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

}