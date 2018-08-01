import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ModType } from "../ComplexTypes/ModType";

/**
 * The element mod is an inline element containing the
 * specification of a modification on another document
 */
export class Mod extends AbstractNode {
  abbreviation = '';

  nodeName = 'mod';

  readonly CHILDREN_MAP: NodeRules = (new ModType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
