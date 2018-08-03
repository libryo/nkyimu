import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereq } from "../ComplexTypes/Inlinereq";

/**
 * The element heading is a heading element in a hierarchy that
 * contains a title or any other textual content to describe
 * the structure.
 */
export class Heading extends AbstractNode {
  abbreviation = '';

  nodeName = 'heading';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
