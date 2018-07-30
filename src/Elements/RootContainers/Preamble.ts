import { AbstractNode } from "../../Abstract/AbstractNode";
import { Preambleopt } from "../ComplexTypes/Preambleopt";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The element preamble is used as a container of the text that opens
 * the main body of the document as a preamble
 */
export class Preamble extends AbstractNode {
  abbreviation = '';

  nodeName = 'preamble';

  protected nodeRx: RegExp = Preambleopt.getRegExp();

  readonly CHILDREN_MAP: NodeRules = (new Preambleopt()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

}