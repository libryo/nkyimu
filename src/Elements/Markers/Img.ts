import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Markeropt } from "../ComplexTypes/Markeropt";

/**
 * The element img is an HTML element and is used in Akoma Ntoso
 * as in HTML, for including an image. It is a marker.
 */
export class Img extends AbstractNode {
  abbreviation = '';

  nodeName = 'img';

  readonly CHILDREN_MAP: NodeRules = (new Markeropt()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
