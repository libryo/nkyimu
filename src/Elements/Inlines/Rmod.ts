import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ModType } from "../ComplexTypes/ModType";

/**
 * The element rmod is an inline element containing the
 * specification of a range of modifications on another document.
 */
export class Rmod extends AbstractNode {
  abbreviation = '';

  nodeName = 'rmod';

  readonly CHILDREN_MAP: NodeRules = (new ModType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
