import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereq } from "../ComplexTypes/Inlinereq";

/**
 * The element subheading is a heading element in a hierarchy that
 * contains a subtitle or any other textual content to further
 * describe the structure.
 */
export class Subheading extends AbstractNode {
  abbreviation = '';

  nodeName = 'subheading';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
