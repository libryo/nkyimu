import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksreq } from "../ComplexTypes/Blocksreq";

/**
 * The element intro is a heading element in a hierarchy that
 * contains paragraphs introducing one or more lower hierarchical elements.
 */
export class Intro extends AbstractNode {
  abbreviation = '';

  nodeName = 'intro';

  readonly CHILDREN_MAP: NodeRules = (new Blocksreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
