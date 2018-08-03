import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element signature is an inline element within conclusions to
 * identify where the document defines one of the signatures
 */
export class Signature extends AbstractNode {
  abbreviation = '';

  nodeName = 'signature';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
