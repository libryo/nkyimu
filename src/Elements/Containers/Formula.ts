import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksreq } from "../ComplexTypes/Blocksreq";

/**
 * The element formula is a section of the preface or preamble that
 * contains a formulaic expression that is systematically or frequently
 * present in a preface or a preamble and has e precise legal meaning
 * (e.g. an enacting formula). Use the refersTo attribute for the
 * specification of the actual type of formula.
 */
export class Formula extends AbstractNode {
  abbreviation = 'fo';

  nodeName = 'formula';

  readonly CHILDREN_MAP: NodeRules = (new Blocksreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
