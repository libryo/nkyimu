import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereq } from "../ComplexTypes/Inlinereq";

/**
 * The element ref is an inline element containing a legal reference
 */
export class Ref extends AbstractNode {
  abbreviation = '';

  nodeName = 'ref';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
