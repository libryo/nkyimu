import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereq } from "../ComplexTypes/Inlinereq";

/**
 * The element crossHeading is a heading element that is placed side
 * by side with hierarchical containers.
 */
export class CrossHeading extends AbstractNode {
  abbreviation = '';

  nodeName = 'crossHeading';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
