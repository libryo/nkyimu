import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Markeropt } from "../ComplexTypes/Markeropt";

/**
 * The element br is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the breaking of a line.
 */
export class Br extends AbstractNode {
  abbreviation = '';

  nodeName = 'br';

  readonly CHILDREN_MAP: NodeRules = (new Markeropt()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}

