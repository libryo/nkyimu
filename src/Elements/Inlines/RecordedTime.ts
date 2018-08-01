import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

/**
 * The element recordedTime is an inline element for the
 * specification of an explicit mention of a time
 * (e.g., in a debate)
 */
export class RecordedTime extends AbstractNode {
  abbreviation = '';

  nodeName = 'recordedTime';

  readonly CHILDREN_MAP: NodeRules = (new Inline()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
