import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element remark is an inline element for the specification
 * of editorial remarks (e.g., applauses, laughters, etc.)
 * especially within debate records
 */
export class Remark extends AbstractNode {
  abbreviation = '';

  nodeName = 'remark';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
