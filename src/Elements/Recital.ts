import { AbstractNode } from "../Abstract/AbstractNode";
import { NodeRules } from "../Interfaces/NodeRules";
import { ItemType } from "./ComplexTypes/ItemType";

/**
 * The element recital is the individual element of the preface
 * that is called recital
 */
export class Recital extends AbstractNode {
  abbreviation = '';

  nodeName = 'recital';

  readonly CHILDREN_MAP: NodeRules = (new ItemType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

}