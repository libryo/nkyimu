import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ModType } from "../ComplexTypes/ModType";

/**
 * The element mmod is an inline element containing multiple
 * specifications of modifications on another document
 */
export class Mmod extends AbstractNode {
  abbreviation = '';

  nodeName = 'mmod';

  readonly CHILDREN_MAP: NodeRules = (new ModType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
